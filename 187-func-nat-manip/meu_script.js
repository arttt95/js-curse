//propriedade length
var nome = ' Jorge Sant Ana '

//Exibe o valor do total de caractéres contidos em uma string
document.write(nome.length)

document.write('<br/><br/>')

//Exibe o caracter localizado no índice 7, lembrando que o índice inicia na posição 0
document.write(nome.charAt(7))

document.write('<br/><br/>')

//Primeira ocorrência de determinado caracter
document.write(nome.indexOf('x'))

document.write('<br/><br/>')

//Atualiza um valor dentro de uma string
document.write(nome.replace('Sant Ana', 'Silva'))

document.write('<br/><br/>')

//Atualiza um valor dentro de uma string sem alterar o valor original
var trecho_nome = nome.slice(6, -4)
document.write(trecho_nome)

document.write('<br/><br/>')

//Converte a string inteira para Lower Case
document.write(nome.toLowerCase())

document.write('<br/><br/>')

//Converte a string interira para Upper Case
document.write(nome.toUpperCase())

document.write('<br/><br/>')

//Remove os caractéres em branco nas exrtremidades
document.write('-' + nome.trim() + '-')