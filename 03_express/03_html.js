const express = require("express")
const app = express()

//Para juntar com um html é simples, usaremos a função "sendFile", para indicar que o html está neste diretorio, usaremos o __dirname e concatenaremos com o local onde se encontra o arquivo
app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.listen(8081, function(){
    console.log("servidor rodando!")
})