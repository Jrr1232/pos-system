const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')

class Hair_client extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.pin);
    }
}

Hair_client.init(
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
            allowNull: false
        }

    },
    {

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Hair_client',
        hooks: {

            beforeValidate: async (hairClient) => {
                if (!hairClient.client_id) {
                    hairClient.client_id = generateRandomClientId();
                }

            }
        }
    }
);
function generateRandomClientId() {
    return Math.floor(Math.random() * 9000) + 1000;
}

module.exports = Hair_client;