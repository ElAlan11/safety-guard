'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IncidentPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      IncidentPhoto.belongsTo(models.Incident,
        {
            as: 'incident',
            foreignKey: 'incident_id'
        }
      );
    }
  }
  IncidentPhoto.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    incident_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    file: {
      type: DataTypes.STRING,
      allowNull: false
    },
    license_plate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'IncidentPhoto',
  });
  return IncidentPhoto;
};