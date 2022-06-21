let read = require('readline-sync')
let anterior, posterior, numero
numero = read.questionInt("Digite um número: ")
anterior = numero - 1 
posterior = numero + 1
console.log("Anterior de ",numero," é ", anterior," e Posterior é ",posterior)
