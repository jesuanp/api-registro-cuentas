const { Sequelize } = require('sequelize');
require('dotenv').config()

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

const accountModel = require('./models/account/modelAccount.js');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/registrocuentas`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

accountModel(sequelize);

const {account} = sequelize.models

module.exports = {
    db: sequelize,
    Account: account
}
