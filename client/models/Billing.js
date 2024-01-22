const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Billing extends Model {

}

Billing.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,


        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,

        }, service_code: {
            type: DataTypes.INTEGER,
            allowNull: true,

        },
        date_of_service: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        service_name: {
            type: DataTypes.STRING,
            allowNull: true
        }

    },
    {

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Billing',
    }
);


module.exports = Billing;