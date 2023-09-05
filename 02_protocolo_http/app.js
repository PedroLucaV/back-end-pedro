//Para usar um modulo iremos criar uma variavel como antes:

let http = require("http") //O http por ser nativo não precisa do diretorio especificado, permite que criemos aplicações back-end

http.createServer(function(req, res){
    //Ela possui duas funções, req (requisição), res(responde), como não iremos usa-lo muito, iremos falar do res, ele serve para enviar uma resposta por usuario:
    res.end("Hello World") //end envia uma mensagem, porem ele ainda ficara infinitamente carregando, pq o nodeJS é diferente das outras linguagens, que altera aqui e em tempo real ela altera, mas por enquanto toda alteração precisara fechar o servidor (ctrl + c) e abrindo denovo, futuramente veremos como fazer isso de forma automatizada

}).listen(8080) //Vai abrir um servidor http; O Listen irá pesquisar qual porta esse servidor será aberto, que são números, para não haver interferencias na comunicação com outros arquivos, sempre usar numeros grandes!

console.log("Servidor rodando...")

//para acessa-lo, colocamos no navegador: "localhost:(numero da porta, no caso 8081)"