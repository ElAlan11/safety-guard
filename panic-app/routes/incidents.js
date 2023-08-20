var express = require('express');
var router = express.Router();
const axios = require('axios');
var sessionUtils = require('../utils/session-checker.util');
var responseHandler = require('../utils/response-handler.util');
const incidentController = require('../controllers/incident-controller');


// Registra un incidente disparado por el botón de pánico
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
                phone: contact.phone,
                sms_topic: contact.sms_topic
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
                    var resMsg = {
                        message: 'Incident successfully created',
                        incidentId: incident.id
                    };
                    responseHandler.sendResponse(req, res, next, 200, resMsg);
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

// Actualiza la localización del usuario
router.post('/refresh', sessionUtils.validateSession, (req, res , next)=>{
    var userId = req.session.userId;

    // Valida los parámetros de entrada
    if(!req.body.longitude || !req.body.latitude || isNaN(req.body.longitude) || isNaN(req.body.latitude) || !req.body.incidentId){
        responseHandler.sendResponse(req, res, next, 400, 'Incorrect request parameters');
        return;
    }
    var incidentId = req.body.incidentId;
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;

    // Obtiene el incidente con el ID recibido
    var incident = incidentController.getIncident(incidentId).then((giRes) => {
        // Actualiza la actualización relacionada al incidente

        if(giRes.length === 0){ // Si no existen incidentes con el ID recibido...
            responseHandler.sendResponse(req, res, next, 400, 'Non-existent incident');
            return;
        }

        incidentController.updateLocation(incidentId, latitude, longitude).then((resUpd) => {
            responseHandler.sendResponse(req, res, next, 200, 'Location updated successfully');
        })
        .catch((error) => {
            var resMsg = "Update record failed: " + error.original.code;
            responseHandler.sendResponse(req, res, next, 500, resMsg);
        });

        console.log(giRes);
    })
    .catch((error) => {
        var resMsg = "Failed to retrieve record from database: " + error.original.code;
        responseHandler.sendResponse(req,res,next, 500, resMsg);
    });

});


router.post('/refresh', sessionUtils.validateSession, async(req, res , next)=>{
    var userId = req.session.userId;

    // Valida los parámetros de entrada
    if(!req.body.incidentId || !req.body.audioFile || !req.body.photos){
        responseHandler.sendResponse(req, res, next, 400, 'Incorrect request parameters');
        return;
    }


});


module.exports = router;
