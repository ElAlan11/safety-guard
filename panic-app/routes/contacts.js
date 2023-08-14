var express = require('express');
var router = express.Router();
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
      contactController.create(req.body, userId).then((resp) => {
        responseHandler.sendResponse(req,res,next, 200, 'Contact successfully registered');
      }).catch((error) => {
        var resMsg = "Failed to insert record to database: " + error.original.code;
        responseHandler.sendResponse(req,res,next, 500, resMsg);
      });
    }
  }).catch((error) => {
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
