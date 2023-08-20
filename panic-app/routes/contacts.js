var express = require('express');
var router = express.Router();
const axios = require('axios');
var sessionUtils = require('../utils/session-checker.util');
var responseHandler = require('../utils/response-handler.util');
const contactController = require('../controllers/contact-controller');

// Registra un contacto de confianza asociado a un usuario
router.post('/register', sessionUtils.validateSession, (req, res , next)=>{
  var userId = req.session.userId;

  // Valida los parámetros de entrada
  if(!req.body.contactPhone || !req.body.contactName || isNaN(req.body.contactPhone)){
    responseHandler.sendResponse(req, res, next, 400, 'Incorrect request parameters');
    return;
  }

  // Valida que el teléfono del contacto de confianza no esté ya registrado para un mismo usuario
  contactController.getTrustedContacts(userId).then((trustedCont) => {
    var existContact = trustedCont.find(contact => contact.phone === req.body.contactPhone);

    if(existContact){ // Si el contacto ya está registrado...
      responseHandler.sendResponse(req, res, next, 400, 'A trusted contact with the phone number submitted already exists');
    }
    else { // Si el contacto no está registrado...
      contactController.create(req.body, userId).then((contact) => {
        // Alta del contacto en AWS SNS mediante callout a un servicio

        // Construye cuerpo de la petición
        var reqBody = {
          contact: {
            external_id: contact.external_id,
            name: contact.name,
            phone: contact.phone
          }
        }

        // Envía petición para dar de alta al contacto en AWS SNS
        axios.post('http://httpbin.org/post', reqBody)
          .then(function (calloutRes) {
            if (calloutRes.status === 200) { // Alta en AWS exitosa
              // console.log('RESPONSE DATA \n:', calloutRes.data);

              // Verifica que la respuesta contenga el tópico SNS  
              //----------------------------------------------------------------------------DESCOMENTAR
              // if(!calloutRes.data.TopicArn){
              //   responseHandler.sendResponse(req, res, next, 500, 'Could not create SNS topic');
              //   return;
              // }

              // ----------------------------------------------------------------------------ELIMINAR
              calloutRes.data.TopicArn = 'arn:aws:sns:us-east-2:402433848122:SNS-Topic-SNS-Topic-2c838594-d317-4042-8f16-8a75e5bcf594';

              // Actualiza el contacto en BD para agregar el SNS Topic generado
              contactController.updateSNSTopic(contact.id, calloutRes.data.TopicArn).then((updRes) => {
                responseHandler.sendResponse(req, res, next, 200, 'Contact successfully registered');
              })
              .catch((error) => { // Error al actualizar contacto en BD con el SNS Topic
                var resMsg = "Failed to update record with SNS topic: " + error.original.code;
                responseHandler.sendResponse(req, res, next, 500, resMsg);
              });
          
              
            }
            else { // Respuesta de error por parte del servico de alta
              console.log(calloutRes);
              responseHandler.sendResponse(req, res, next, 500, 'Could not create SNS topic');
            }
          })
          .catch(function (error) { // Error al consumir servico de alta
            console.log(error);
            responseHandler.sendResponse(req, res, next, 500, 'Could not create SNS topic');
          });

      }).catch((error) => { // Error al crear contacto en BD
        var resMsg = "Failed to insert record to database: " + error.original.code;
        responseHandler.sendResponse(req, res, next, 500, resMsg);
      });
    }
  }).catch((error) => { // Error al intentar buscar contacto en BD
    var resMsg = "Failed to retrieve record from database: " + error.original.code;
    responseHandler.sendResponse(req,res,next, 500, resMsg);
  });

});

// Registra un contacto de confianza asociado a un usuario
router.post('/edit', sessionUtils.validateSession, (req, res , next)=>{
  var userId = req.session.userId;

  // ----------------   PENDIENTE
});

module.exports = router;
