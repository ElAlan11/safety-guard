const Sequelize = require('sequelize');
const { Op } = require('sequelize');
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
    // Actualiza el estado y ubicación de fotos
    updateStatusF(incidentId, photosFolder, audioKey){
        return Incident
            .update({ 
                finished: true,
                photos_folder: photosFolder,
                audio_file: audioKey
            }, {
                where: { id: incidentId }
            });
    },
    // Sube la descripción de un incidente
    upldDescription(incidentId, desc, cat){
        return Incident
            .update({ 
                description: desc,
                category: cat
            }, {
                where: { id: incidentId }
            });
    },
    // Obtiene los reportes de incidentes dentro cierta area
    getIncidentsInArea(maxLatNorth, maxLatSouth, maxLongEast, maxLongWest){
        return Incident.findAll({
            attributes: ['id','initial_latitude', 'initial_longitude', 'createdAt', 'description', 'finished'],
            where: {
                initial_latitude: {
                    [Op.between]: [maxLatSouth, maxLatNorth]
                },
                initial_longitude: {
                    [Op.between]: [maxLongWest, maxLongEast]
                },
                createdAt: {
                    [Op.gt]: new Date(Date.now() - (60 * 60 * 1000))
                }
            }
        })
    },
    // Obtiene el historial  de incidentes de un usuario
    getIncidentsByUser(userId){
        return Incident.findAll({
            raw: true,
            attributes: ['id', 'initial_latitude', 'initial_longitude', 'createdAt', 'description', 'audio_file', 'photos_folder'],
            where: {
                user_id: userId,
                finished: 1
            }
        })
    },

};