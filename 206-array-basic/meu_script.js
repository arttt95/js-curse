//Forma de escrita 1
var lista_frutas = Array()

lista_frutas[1] = 'Banana'
lista_frutas[2] = true
lista_frutas['x'] = 'Morango'
lista_frutas[4] = 100

console.log(lista_frutas[2])

//Forma de escrita 2
var lista_frutas2 = []

lista_frutas2[1] = 'Banana'
lista_frutas2[2] = true
lista_frutas2['x'] = 'Morango'
lista_frutas2[4] = 100

console.log(lista_frutas['x'])

//Dessa forma a ordenação da lista parte do número 0
var lista_frutas3 = Array('Banana', 'Maçã', 'Morango', 'Uva')

console.log(lista_frutas3[1])

//Dessa forma a ordenação da lista também parte do número 0
var lista_frutas3 = ['Banana', 'Maçã', 'Morango', 'Uva']

console.log(lista_frutas3[2])