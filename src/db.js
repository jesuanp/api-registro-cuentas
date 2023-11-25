const { Sequelize } = require('sequelize');

const accountModel = require('./models/account/modelAccount.js');

const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/registrocuentas', {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

accountModel(sequelize);

const {account} = sequelize.models

module.exports = {
    db: sequelize,
    Account: account
}
