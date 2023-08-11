const Sequelize = require('sequelize');
const User = require('../models').Contact;

module.exports = {

    getTrustedContacts(userId){
        return User.findAll({
            attributes: ['name', 'phone'],
            where: {
                user_id: userId
            }
        })
    },
    create(reqData) {
        return User
            .create({
                user_id: reqData.userId,
                name: reqData.contactName,
                phone: reqData.contactPhone
            });
    },

};