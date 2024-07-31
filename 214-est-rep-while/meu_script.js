var x = 1

document.write('Inicio<br>')

//true ou false
while (x <= 10 && x > 5) {

    x++

    if(x === 5) {

        continue

    }
    
    document.write(x + '<br>')


}

document.write('Fim')