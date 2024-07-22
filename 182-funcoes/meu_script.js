/*
function calcular_area_terreno (largura, comprimento) {

    //lógica
    var area = largura * comprimento

    document.write('O terreno possui ' + area + ' metros²')

}*/


var largura = prompt('Insira a largura do terreno:')
var comprimento = prompt('Insira o comprimento do terreno:')
largura = parseInt(largura)
comprimento = parseInt(comprimento)


var area1 = calcular_area_terreno(largura, comprimento)


document.write('O terreno possui ' + area1 + ' metros²')


function calcular_area_terreno (largura, comprimento) {

    //lógica
    var area = largura * comprimento

    return area

}

