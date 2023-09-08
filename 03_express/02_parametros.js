const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Hello World")
})

//Supomos que eu queira puxar o nome de alguem para mostrar na rota ola, onde ela no navegador escreve: /ola/nome; e aparece seu nome, para isso usamos parametros
app.get("/ola/:nome/:idade/:peso", function(req, res){
     //após criar a rota criaremos um parametro, e colocaremos após o nome /:, os dois pontos significa que aquilo é um parametro, um valor dinamico que o usuario passa, depois o nomeamos; Detalhe, qnd cria o parametro, quando for acessar a rota, se precisa acessar o ola com o parametro, onde no navegador você irá passar um valor para ele, exemplo: /ola/pedro, agora o parametro nome recebeu "pedro", podemos estender por exemplo adicionando idade e peso
    //Agora vamos deixar mais interessante, vamos mostrar os parametros mostrados,então usamo o req.params dentro do res.send, vê-se que agora ele me mostra uma tabelinha com os valores e nome de cada parametro passado;
    //res.send(req.params)
    //O req, é responsavel por receber dados de uma requisição, ou seja, quando eu atribuo valores a esses parametros, ele está enviando os dados para a requisição, e então atraves do res, ele me mostra todos os parametros por conta do "params", vamos deixar mais organizado agora, para chamar somente um parametro, iremos botar um . depois o nome do parametro:
    res.send(`<h1>Olá ${req.params.nome}</h1><p>Sua idade é de ${req.params.idade}</p>`)
    // res.send(`<p>Sua idade é de ${req.params.idade}</p>`), não podemos chamar a função send mais de uma vez, então vamos juntar eles em um só
})

app.listen(8081, function(){
    console.log("servidor open...")
})