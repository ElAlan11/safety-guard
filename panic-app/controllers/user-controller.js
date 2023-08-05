const Sequelize = require('sequelize');
const User = require('../models').User;

module.exports = {

    getUserPassword(reqEmail){
        return User.findAll({
            attributes: ['email', 'password'],
            where: {
                email: reqEmail
            }
        })
    },
    create(req, res) {
        return User
            .create({
                email: req.body.email,
                password: req.body.password,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                birthday: req.body.birthday,
                phone: req.body.phone
            });
    },

    // create(req, res) {
    //     return User
    //         .create({
    //             email: req.body.email,
    //             password: req.body.password,
    //             firstname: req.body.firstname,
    //             lastname: req.body.lastname,
    //             birthday: req.body.birthday,
    //             phone: req.body.phone
    //         })
    //         .then(User => res.status(200).send(User))
    //         .catch(error => res.status(400).send(error))
    // },
};