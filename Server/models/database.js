const Sequelize = require('sequelize')

const uniSearchDB = new Sequelize('uniSearchDB', 'postgres', process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = uniSearchDB;