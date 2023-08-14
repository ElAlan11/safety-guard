const Sequelize = require('sequelize');
const User = require('../models').Contact;

module.exports = {
    // Obtiene los contactos de confianza relacionados a un usuario
    getTrustedContacts(userId){
        return User.findAll({
            attributes: ['name', 'phone'],
            where: {
                user_id: userId
            }
        })
    },
    //Crea un nuevo contacto de confianza y lo asocia a un usuario
    create(reqData, userId) {
        return User
            .create({
                user_id: userId,
                name: reqData.contactName,
                phone: reqData.contactPhone
            });
    },

};