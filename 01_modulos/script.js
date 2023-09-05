// function soma(a, b){
//     return a + b
// }

// function subtracao(a, b){
//     return a - b
// }

// function multiplicacao(a, b){
//     return a * b
// }

// function divisao(a, b){
//     return a / b
// }

//Ao inves de pegarmos o valor dessas funções tudo dentro de um só codigo, iremos usar modulos, onde deixaremos se parados em arquivos diferentes com o metodo: module.exports = (variavel/function)

//Pode se deixar separado em pastas.

//Para incorpora-la, voce usa a funcão nativa "let (nomeVar) = require(./)" dentro de uma variavel para chamar aquele procedimento guardado, o ./ serve para ele saber que os arquivos estão na mesma pasta;

let somaFunc = require("./soma") //não nescessita da extensão

//A variavel somaFunc ta recebendo tudo que está lá no arquivo

console.log(somaFunc(1,2))

let subFunc = require("./subtracao")

//Subtração

console.log(subFunc(1,5))

let divFunc = require("./divisao")

//Divisão

console.log(divFunc(2,10))

let multiFunc = require("./multiplicacao")

//Multiplicação

console.log(multiFunc(2, 8))