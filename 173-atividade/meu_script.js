/*
var idade = prompt('Qual a sua idade?')

if (idade >= 0 && idade < 15) {
    alert('Criança')
}

if (idade >= 15 && idade < 30) {
    alert('Jovem')
}

if (idade >= 30 && idade < 60) {
    alert('Adulto')
}

if (idade > 60) {
    alert('Idoso')
}
*/

var idade = prompt('Insira a sua idade: ')

if (idade >= 0 && idade < 15) {
    document.write('Criança')
} else  if (idade >= 15 && idade < 30) {
    document.write('Jovem')
} else if (idade >= 30 && idade < 60) {
    document.write('Adulto')
} else if (idade > 60) {
    document.write('Idoso')
}