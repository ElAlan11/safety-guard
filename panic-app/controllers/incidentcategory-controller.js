const Sequelize = require('sequelize');
const IncidentCategory = require('../models').IncidentCategory;

module.exports = {

    // Obtiene una categoría por su nombre
    getByName(categoryName){
        return IncidentCategory.findAll({
            where: {
                name: categoryName
            }
        })
    },
    // Obtiene una categoría por su ID
    getById(categoryId){
        return IncidentCategory.findAll({
            where: {
                id: categoryId
            }
        })
    },
};