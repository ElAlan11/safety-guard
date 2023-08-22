const Sequelize = require('sequelize');
const IncidentPhoto = require('../models').IncidentPhoto;

module.exports = {
    //Crea un nuevo contacto de confianza y lo asocia a un usuario
    create(incidentId, fileKey) {
        return IncidentPhoto
            .create({
                incident_id: incidentId,
                file: fileKey,
            });
    },
    
};