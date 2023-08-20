const Sequelize = require('sequelize');
const Incident = require('../models').Incident;

module.exports = {
    // Obtiene los contactos de confianza relacionados a un usuario
    getIncident(incidentId){
        return Incident.findAll({
            where: {
                id: incidentId
            }
        })
    },
    //Crea un nuevo contacto de confianza y lo asocia a un usuario
    create(reqData, userId) {
        return Incident
            .create({
                user_id: userId,
                initial_latitude: reqData.latitude,
                initial_longitude: reqData.longitude,
                latitude: reqData.latitude,
                longitude: reqData.longitude
            });
    },
    // Obtiene los contactos de confianza relacionados a un usuario
    updateLocation(incidentId, lat, lon){
        return Incident
            .update({ 
                latitude: lat,
                longitude: lon
            }, {
                where: { id: incidentId }
            });
    },

    


};