//Pasta para guardar os models criados, este arquivo servirá especificamente para se comunicar com o banco de dados
const Sequelize = require("sequelize")
//Configurando mysql
const sequelize = new Sequelize("postapp", "root", "pedroga12", {
    host: "localhost",
    dialect: "mysql"
})

//agora precisamos exportar o "Sequelize" e o "sequelize", para isso usamos o module.exports = { Sequelize: Sequelize, sequelize: sequelize}

module.exports = {
    Sequelize: Sequelize, 
    sequelize: sequelize
}

//Este arquivo serve somente para o banco de dados total e não um model, para o model criaremos o arquivo correspondente a ele