const Sequelize = require('sequelize');
const GlobalConfig = require('../models').GlobalConfig;

module.exports = {

    getConfig(){
        return GlobalConfig.findAll({
            attributes: ['parameter', 'value']
        })
    },
};