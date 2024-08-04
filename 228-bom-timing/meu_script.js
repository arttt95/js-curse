//setTimeout(function() {document.write('Teste<br>')}, 2000)

var i = 5

var x = setInterval(function() {
    document.write(i)
    document.write('<br>')
    i--

    if(i === 0) {
        clearInterval(x)
    }

}, 1000)