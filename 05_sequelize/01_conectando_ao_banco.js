//Primeira mente criaremos uma constante chamada Sequelize e dar um require
const Sequelize = require('sequelize')
//Depois criaremos outra que se chamará sequelize que receberá: new Sequelize('nome do banco', 'usuario', 'senha', {host: 'quem hosteia', dialect: 'nome_do_sql})
const sequelize = new Sequelize('sequelize', 'root', 'pedroga12', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso ao Banco!")
}).catch(function(erro){
    console.log("Falha ao conectar: " + erro)
}) //essa função verifica se nos conectamos ao banco, o then serve para dar callback de uma função, que no caso é a authenticate(), caso consigamos nos conectar chamará a then, caso falhe, voltará a catch