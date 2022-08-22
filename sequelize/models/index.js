const { Sequelize } = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// sequelize connecting test
sequelize.authenticate()
    .then( () => {
        console.log('Connected test to database');
    })
    .catch(error => console.log('Unable to connect to the database ', error));

module.exports = sequelize;

