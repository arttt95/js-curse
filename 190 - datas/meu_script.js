/*
var data = new Date()

//adicionar ou remover dias da data
document.write('Dias<hr/>')
document.write(data.toString())
data.setDate(data.getDate() - 1)

document.write('<hr/>')
document.write(data.toString())
document.write('<hr/>')

//adicionar ou remover meses da data
document.write('<br/>Meses<hr/>')
document.write(data.toString())
data.setMonth(data.getMonth() + 1)

document.write('<hr/>')
document.write(data.toString())
document.write('<hr/>')

//adicionar ou remover anos da data
document.write('<br/>Anos<hr/>')
document.write(data.toString())
data.setFullYear(data.getFullYear() + 1)

document.write('<hr/>')
document.write(data.toString())
*/

//15/01/2017
var data1 = new Date(2017, 0, 15)

//23/02/2017
var data2 = new Date(2017, 1, 23)

document.write(data1.toString())

document.write('<hr/>')

document.write(data2.toString())

document.write('<br/></br><hr/>')

//converter datas para algo que possamos calcular
var mili_um = data1.getTime()
document.write(mili_um)

document.write('<hr/>')

var mili_dois = data2.getTime()
document.write(mili_dois)

document.write('<br/></br><hr/>')

//milisegundos em relação a 1 de janeiro de 1970

//encontrar a quantidade de milisegundos entre data1 e data2
var diferenca = Math.abs(data1.getTime() - data2.getTime())
document.write(diferenca)

document.write('<br/></br><hr/>')

//1 dia tem 24hrs, cada hora tem 60mints, cada minuto tem 60sgds e cada segundo tem 1000mlsgds
//então quantos milisegundos tem em um dia

var mili_dia = 1000 * 60 * 60 * 24
document.write('Um dia tem: ' + mili_dia + ' milisegundos')

document.write('<br/></br><hr/>')

var diferenca_dias = diferenca / mili_dia
document.write('A diferença entre as duas datas é de ' + Math.ceil(diferenca_dias) + ' dias incompletos.')