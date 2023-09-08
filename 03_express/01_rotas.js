const express = require("express") //esse codigo irá importar o express, ele retorna uma funcao que cria o express
const app = express() //a variavel app esta recebendo a funcao que vem do modulo express, que esta funcao cria uma copia inteira do framework para toda a variavel app, ela é a principal do sistema, é recomendado usar ela como const para não perder dados

//Para abrir um servido no express, apenas chamamos a variavel do express: app; depois a função listen, e dentro dela a sua porta:
//app.listen(8081)
//Porem, está função sempre tem que ser a ultima!!!

//Ao executar o servidor, percebe-se escrito: "Cannot GET /", isso se da por que a aplicação ainda não tem rota definida

//Oque são rotas? É o caminho para a aplicação

//Como crio ela?

app.get("/", function(req, res){
    res.send("Hello World, Seja bem vindo!") //Resposta do servidor
})


//Agora para criar um caminho no meu site, como por exemplo um caminho: SOBRE; criaremos mais uma rota, agora botando o nome dela:

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre rotas!")
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu Blog")
})

app.get("/fotos", function(req, res){
    res.send("Pagina de fotos")
})
//Para executar callback voce coloca a function apos a virgula e coloca o callback no console
//localhost:8081
app.listen(8081, function(){ //app.listen é executada e fala pro node que esta rodando, logo o node executa uma função em seguida
    console.log("Servidor rodando!!!")
})