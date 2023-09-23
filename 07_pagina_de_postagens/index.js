const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
//Agora criaremos uma const para receber o banco de dados do models
const Post = require("./models/Post")
//E agora ao executar a aplicação, será salvo no banco de dados as informações recebidas
const PORT = 8081

//Configurando handlebars:
app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
    app.set("view engine", "handlebars")
//Configurando express:
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())

//Rotas:

//Agora esse proximo servira para poder puxar uma pagina listando as postagens
app.get("/", function(req, res){
    // res.render("home")
    //Para retornar valores dentro do banco de dados usaremos o Nome.all().then()function(parametro){res.render("nome") {nomeDoMostrado: parametro}}

    Post.findAll().then(function(posts){
        res.render("home", {posts: posts})
        //E agora vamos no handlebars e vamos adicionar os valores do post
    })

})
app.get("/cad", function(req, res){
    res.render("formulario") //isso irá executar aquele handlebars criado em views
})

app.post("/add", function(req, res){ //tem que mudar o tipo da rota, pois será nescessario para poder usar o metodo post do handlebars
    // //Para puxar um dado recebido no formulario usamos esse procedimento: req.body.nomeDoCampo
    // res.send(`<h1>Titulo: ${req.body.titulo}</h1> <p>Texto: ${req.body.conteudo}</p>`), mas não vamos usar isso, iremos usar o banco de dados:
    // Para chamar iremos começar com o Post.create({req.body.nomeDoCampo})
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        // res.send("Post enviado com sucesso"), caso eu queira redirecionar eu uso: res.redirect("rota")
        res.redirect("/")
    }).catch(function(erro){
        res.send(`Houve um erro ${erro}`)
    })
    //Agora, para criar uma confirmação se o post foi criado ou não, colocamos um .then e um .catch, e agora quando executarmos a aplicação ele tera uma confirmação
})

app.listen(PORT, function(){
    console.log("Server running in https://localhost:8081")
})