const Sequelize = require('sequelize');

const connection = new Sequelize('joneilocal','root','Master1910',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;