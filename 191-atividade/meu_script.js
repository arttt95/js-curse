var num1 = prompt('Insira o primeiro número: ')
var oper = prompt('Insira a operação desejada (soma ou subtração): ')
var num2 = prompt('Insira o segundo número: ')

function calculo (num1, num2, oper) {

    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    var resultado = 0

    if (oper == 'soma') {

        resultado = num1 + num2

    } else {

        resultado = num1 - num2

    }

    return resultado
    
}

document.write('O resultado é: ' + calculo(num1, num2, oper) + '.')
