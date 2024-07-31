//var lista_convidados = ['Jorge', 'Jamilton', 'José', 'Ana', 'Maria']

var lista_convidados = []

lista_convidados['a'] = 'Jorge'
lista_convidados[10] = 'Jamilton'
lista_convidados['zebra'] = 'José'
lista_convidados[-1] = 'Ana'
lista_convidados[true] = 'Jorge'

console.log(lista_convidados)
document.write(lista_convidados)

document.write('<br>')
document.write('<br>')

for (var x in lista_convidados) {
    console.log(lista_convidados[x])
    document.write(lista_convidados[x])
}