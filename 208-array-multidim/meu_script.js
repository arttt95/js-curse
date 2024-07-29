//lista_coisas indexação manual
var lista_coisas1 = Array()

lista_coisas1['frutas'] = Array()

lista_coisas1['frutas'][1] = 'Banana'
lista_coisas1['frutas'][2] = 'Maçã'
lista_coisas1['frutas'][3] = 'Morango'
lista_coisas1['frutas'][4] = 'Uva'

lista_coisas1['pessoas'] = Array()

lista_coisas1['pessoas']['a'] = 'João'
lista_coisas1['pessoas']['b'] = 'José'
lista_coisas1['pessoas']['c'] = 'Maria'


console.log(lista_coisas1)

//lista_coisas2 indexação direta
var lista_coisas2 = Array()

lista_coisas2 ['frutas'] = ['Banana', 'Maçã', 'Morango', 'Uva']

lista_coisas2['pessoas'] = Array('João', 'José', 'Maria')

console.log(lista_coisas2 )

//testes -> acessando as listas multidimenssionais utilizando a indexação específica


//lista_coisas1 -> sublista frutas -> indice manual 2 = Maçã
console.log(lista_coisas1['frutas'][2])

//lista_coisas1 -> sublista pessoas -> indice manual 'a' = João
console.log(lista_coisas1['pessoas']['a'])

//lista_coisas2 -> sublista pessoas -> indice direto 2 = Maria
console.log(lista_coisas2['pessoas'][2])

//lista_coisas1 -> sublista frutas -> indice direto 3 = Uva
console.log(lista_coisas2['frutas'][3])