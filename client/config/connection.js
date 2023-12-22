const Sequelize = require("sequelize");
require("dotenv").config();
let sequelize = "";
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(
        "mysql://d1vp3zq1wm2vvo3u:u6tdp7oyz7had3mn@wb39lt71kvkgdmw0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/q5sfkt1m8sszorv4");
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: "localhost",
            dialect: "mysql",
            port: 3306
        }
    );
}

module.exports = sequelize;