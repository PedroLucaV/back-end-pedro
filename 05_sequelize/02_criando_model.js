const Sequelize = require("sequelize")
const sequelize = new Sequelize("sequelize", "root", "pedroga12", {
    host: "localhost",
    dialect: "mysql"
})

//Um model é uma referencia da tabela dentro do sequelize, ou seja, criaremos uma tabela pelo próprio js

//Para criar um model criamos uma constante

const Postagem = sequelize.define("postagens", {
    //Aqui definiremos o campo:
    titulo: {
        type: Sequelize.STRING //isso fará que ele seja do tipo: VARCHAR
    },
    conteudo: {
        type: Sequelize.TEXT //Text é ilimitado, VARCHAR/STRING é limitado
    }
})

//Para adicionar algo ao banco de dados, usamos o .create e passamos as informações a ser adicionada
// Postagem.create({
//     titulo: "Um Titulo",
//     conteudo: "Um Conteúdo"
// })

//agora executamos e ele adiconará, sempre lembrar de apagar!

const Usuario = sequelize.define("usuarios", {
    Nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    bio: {
        type: Sequelize.TEXT
    }
})

Usuario.create({
    Nome: "Pedro",
    email: "pedro.silva106@aluno.senai.br",
    idade: 16,
    bio: "Sou um jovem interessado"
})

//NomeConst.sync({force: true})
// Usuario.sync({force: true}) //Está função sincroniza o model com o mysql