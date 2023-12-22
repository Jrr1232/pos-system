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
        pin: {
            type: DataTypes.STRING, // Set a specific length for the pin
            allowNull: false
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
            beforeCreate: async (hairClientData) => {
                hairClientData.pin = await bcrypt.hash(hairClientData.pin, 2);
                return hairClientData;
            },
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