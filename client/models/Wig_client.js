const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')
class Wig_client extends Model {

}

Wig_client.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,

        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,

        }, address: {
            type: DataTypes.STRING,

        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,

        },

        client_type: {
            type: DataTypes.STRING,
        }

    },
    {

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Wig_client',
        hooks: {
            beforeValidate: async (wigClient) => {
                if (!wigClient.client_id) {
                    wigClient.client_id = generateRandomClientId();
                }

            }
        }
    }
);
function generateRandomClientId() {
    return Math.floor(Math.random() * 9000) + 1000;
}

module.exports = Wig_client;