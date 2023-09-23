//Este arquivo servira como model para a aplicação de postagens
//primeiramente importaremos o db.js
const db = require("./db")
//E agora definerei o novo modulo chamdo post

const Post = db.sequelize.define("postagens",{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

// Post.sync({force: true})
//Agora vamos exportar para reusa-los
module.exports = Post