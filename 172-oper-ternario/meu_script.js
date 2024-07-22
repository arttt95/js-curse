// Pipe: Ctrl + Shift -> U 007C

//true && true && false = false
if (2 == 2 && 3 >= 1 && 'a' == 'b') {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}

document.write('<br/>')
document.write('<br/>')

//true || true || false = true
if (2 == 2 || 3 >= 1 || 'a' == 'b') {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}

document.write('<br/>')
document.write('<br/>')

//true || true || false = false
if (4 == 2 || 3 >= 5 || 'a' == 'b') {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}

document.write('<br/>')
document.write('<br/>')

//false = true -> operador lógico '!' inverte o resultado do teste lógico
if (!(4 == 2)) {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}

document.write('<br/>')
document.write('<br/>')

//true = false -> operador lógico '!' inverte o resultado do teste lógico
if (!(5 >= 2)) {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}

document.write('<br/>')
document.write('<br/>')

// Exercício Notas e Faltas

var nota = prompt('Insira a nota do aluno:')
var media = 7
var faltas = prompt('Insira a quantidade de faltas do aluno:')
var frequencia_minima = 15

if (nota >= media && faltas <= frequencia_minima) {
    document.write('O aluno foi aprovado tanto em nota quanto em frequência mínima!')
    //lógica
} else {
    document.write('O aluno não foi aprovado')
    //lógica
}

document.write('<br/>')
document.write('<br/>')

//Operadores Ternários
var resultado = (nota >= media && faltas <= frequencia_minima) ? 'Aprovado' : 'Reprovado'
document.write(resultado)
