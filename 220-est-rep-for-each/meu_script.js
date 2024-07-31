//var lista_funcionarios = ['Viviane', 'Rosângela', 'Miguel', 'Lucas', 'Fernanda']

var lista_funcionarios = []

lista_funcionarios['x'] = 'Viviane'
lista_funcionarios[false] = 'Rosângela'
lista_funcionarios[3] = 'Miguel'
lista_funcionarios[27] = 'Lucas'
lista_funcionarios[-12] = 'Fernanda'

var f = function (valor, indice) {

    console.log(valor, indice)

}

lista_funcionarios.forEach(f)



/*
console.log(lista_funcionarios)
document.write(lista_funcionarios[3])

lista_funcionarios.forEach(function(valor, indice, array) {

    //lógica
    console.log('indice ' + indice + ' | valor: ' + valor)

    if (valor == 'Lucas') {
        array[indice] = 'Um novo valor'
    }
    //console.log(array)

})

document.write('<br><br>')

console.log(lista_funcionarios)
document.write(lista_funcionarios[3])
*/