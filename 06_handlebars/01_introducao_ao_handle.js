//O Handlebars é uma TemplateEngine, um apoio ao HTML com novas aplicações para ele, podendo usar os dados do back end no HTML
const express = require("express")
const app = express()
const PORT = 8080
const Sequelize = require("sequelize")
//para iniciar o handlebars, criamos uma const e o chamamos:
const handlebars = require("express-handlebars")

//Agora iremos configurar o handlebars como template-engine:
//Config
    // Template-Engine 
    app.engine("handlebars", handlebars.engine({defaultLayout: "main"})) //o main é o template padrão da aplicação, lembrar de botar o .engine
    app.set("view engine", "handlebars")

//agora criaremos uma pasta chamada: "views", obrigatoriamente assim, e la criaremos uma pasta chamada: "layouts" e depois um arquivo: "main.handlebars"

//Ligando o Banco de Dados:
const sequelize = new Sequelize("sequelize", "root", "pedroga12", {
    host: "localhost",
    dialect: "mysql"
})

app.listen(PORT, function(){
    console.log("Server Running")
})