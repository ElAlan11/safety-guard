const Sequelize = require('sequelize');
const Incident = require('../models').Incident;

module.exports = {
    // Obtiene los contactos de confianza relacionados a un usuario
    // getTrustedContacts(userId){
    //     return User.findAll({
    //         attributes: ['name', 'phone'],
    //         where: {
    //             user_id: userId
    //         }
    //     })
    // },
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

};