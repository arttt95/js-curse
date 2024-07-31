//Exercicio 1


var lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva']

console.log(lista_frutas.length)
console.log(lista_frutas)

var tamanho = lista_frutas.length

for (var x = 0; x < tamanho; x++) {

    document.write(lista_frutas[x])
    document.write('<br>')

}

console.log(lista_frutas.length)
console.log(lista_frutas)

document.write('<hr>')


//Exercicio 2

var a = 1
var b = 1


while (b <= 10) {

    var a = 1

    while (a <= 10) {

    document.write(b + ' x ' + a + ' = ' + (b * a))
    document.write('<br>')

    a++

    }

    document.write('<hr>')
    
    b++

}