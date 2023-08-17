var express = require('express');
var router = express.Router();
const axios = require('axios');
var sessionUtils = require('../utils/session-checker.util');
var responseHandler = require('../utils/response-handler.util');
const incidentController = require('../controllers/incident-controller');


// Registra un contacto de confianza asociado a un usuario
router.post('/start', sessionUtils.validateSession, (req, res , next)=>{
    var userId = req.session.userId;

    // Valida los parámetros de entrada
    if(!req.body.longitude || !req.body.latitude || isNaN(req.body.longitude) || isNaN(req.body.latitude)){
        responseHandler.sendResponse(req, res, next, 400, 'Incorrect request parameters');
        return;
    }

    // Crea en incidente en BD
    incidentController.create(req.body, userId).then(async(incident) => {
        const usr = await incident.getUser(); // Obtiene el usuario que levantó la alerta

        const hasContacts = await usr.countContacts(); // Verifica si el usuario tiene contactos registrados
        console.log(hasContacts);

        if(!hasContacts){ // Si el usuario no tiene contactos registrados solo crea el incidente y termina la ejecución
            responseHandler.sendResponse(req, res, next, 200, 'Incident ' + incident.id + ' successfully created. No contacts to notify.');
            return;
        }

        const contacts = await usr.getContacts(); // Obtiene los contactos registrados por el usuario
        
        var contactsData = [];

        // Construye arreglo con datos del contacto que se enviarán
        for(var contact of contacts){
            var contData = {
                external_id: contact.external_id,
                name: contact.name,
                phone: contact.phone
            }
            contactsData.push(contData);
        }

        // Construye cuerpo de la petición
        var reqBody = {
            userId: userId,
            userName: usr.firstname + ' ' + usr.lastname,
            incidentId: incident.id,
            contacts: contactsData
        }
        
        // Envía petición al middleware de la plataforma web para notificar a contactos de confianza
        axios.post('http://httpbin.org/post', reqBody)
            .then(function (calloutRes) {
                if(calloutRes.status === 200){
                    console.log(calloutRes);
                    responseHandler.sendResponse(req, res, next, 200, 'Incident ' + incident.id + ' successfully created');
                }
                else{
                    console.log(calloutRes);
                    responseHandler.sendResponse(req, res, next, 500, 'Could not notify contacts');
                }
            })
            .catch(function (error) {
                console.log(error);
                responseHandler.sendResponse(req, res, next, 500, 'Could not notify contacts');
            });

    }).catch((error) => {
        var resMsg = "Failed to insert record to database: " + error.original.code;
        responseHandler.sendResponse(req, res, next, 500, resMsg);
    });
   

});


module.exports = router;
