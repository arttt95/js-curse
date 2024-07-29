var lista_frutas = Array()

lista_frutas[0] = 'Maçã'
lista_frutas[1] = 'Uva'
lista_frutas[2] = 'Banana'
lista_frutas[3] = 'Morango'

console.log(lista_frutas.sort())

var lista_numeros = Array()

lista_numeros[0] = 12
lista_numeros[1] = 40
lista_numeros[2] = 3
lista_numeros[3] = 7
lista_numeros[4] = 19
lista_numeros[5] = 1

console.log(lista_numeros.sort(ordena_numeros))

function ordena_numeros(a, b) {

    return a - b
    // valor < 0 --> significa que 'a' será ordenado antes que 'b'
    //valor > 0 --> significa que 'b' será ordenado antes que 'a'
    //exemplo --> 'a'(40) - 'b'(3) --> 40 - 3 = 37
    //37 > 0 --> neste caso o valor 'b' será observado antes do valor 'a'

    //se por acaso os valores forem '==', a ordem será mantida

    //se houver algum erro, como um cálculo invalido entre um número e
    //uma string, ocorrerá uma falha na ordenação

}