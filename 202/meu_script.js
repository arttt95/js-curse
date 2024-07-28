function aciona_campo () {

    document.getElementById('campo').style.background = "yellow"

}

function valida_campo () {

    var valor_campo = document.getElementById('campo').value

    if (valor_campo.length < 3) {

        document.getElementById('campo').style.background = 'red'

    } else {

        document.getElementById('campo').style.background = 'green'
    }
}