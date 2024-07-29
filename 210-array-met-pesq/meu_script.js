var lista_frutas = []

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

var fruta = 'Maca'
var valor = lista_frutas.indexOf(fruta)

function verificaLista (valor) {

    if (valor === -1) {

        console.log('Elemento não existe')
    
    } else {
        
        var modifica_valor = valor + 1
        console.log('Elemento existe e está na posição ' + modifica_valor)
    
    }

}

verificaLista(valor)