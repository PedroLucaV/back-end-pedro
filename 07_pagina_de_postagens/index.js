const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const handlebars = require("express-handlebars");
const PORT = 8081

//Configurando handlebars:
    app.engine("handlebars", handlebars.engine({defaultLayout: "main"}))
    app.set("view engine", "handlebars")
//Configurando express:
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())
//Configurando mysql
    const sequelize = new Sequelize("postagens", "root", "pedroga12", {
        host: "localhost",
        dialect: "mysql"
    })

//Rotas:
app.get("/cad", function(req, res){
    res.render("formulario") //isso irá executar aquele handlebars criado em views
})

app.post("/add", function(req, res){ //tem que mudar o tipo da rota, pois será nescessario para poder usar o metodo post do handlebars
    //Para puxar um dado recebido no formulario usamos esse procedimento: req.body.nomeDoCampo
    res.send(`<h1>Titulo: ${req.body.titulo}</h1> <p>Texto: ${req.body.conteudo}</p>`)
})

app.listen(PORT, function(){
    console.log("Server running in https://localhost:8081")
})