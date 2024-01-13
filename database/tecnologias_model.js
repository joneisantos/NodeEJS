const Sequelize = require("sequelize");
const connection = require("./database");

const Tecnologia = connection.define('tecnologia',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Tecnologia.sync({force: false}).then(() => {
    //console.log("Tabela criada");
})

module.exports = Tecnologia;