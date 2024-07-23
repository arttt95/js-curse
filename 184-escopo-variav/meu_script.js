//3 escopos: global, função e o bloco

var serie = 'Friends' //escopo global

if (true) { //escopo de bloco
    var serie2 = 'Game of Thrones'
    document.write(serie)
}

document.write('<br/><br/>')

document.write(serie2)

document.write('<br/><br/>')

function x () {

    var serie3 = 'The Walking Dead'
    
    document.write(serie)
    document.write('<br/><br/>')
    document.write(serie2)
}

x()

document.write('<br/><br/>')
document.write(serie3)