'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('incidents', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      latitude: {
        type: Sequelize.FLOAT(8,5)
      },
      longitude: {
        type: Sequelize.FLOAT(8,5)
      },
      initial_latitude: {
        type: Sequelize.FLOAT(8,5)
      },
      initial_longitude: {
        type: Sequelize.FLOAT(8,5)
      },
      audio_file: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.INTEGER,
        references: {
          model: 'incident_categories',
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('incidents');
  }
};