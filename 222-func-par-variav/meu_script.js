/*
function soma (a, b) {

    return a + b
}

console.log(soma(2, 5))*/

var lista = []

function soma () {
    
    var resultado = 0

    for(var i in arguments) {

        console.log(arguments[i])
        resultado += arguments[i]

    }

    return resultado

}
 
console.log(soma(7, 5, 3.2, 0.8, 'Texto'))