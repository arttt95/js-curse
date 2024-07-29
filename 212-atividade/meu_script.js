var objetos = ['Cadeira', 'Impressora', 'Garfo']

function adicionar () {

    var objeto = document.getElementById('objeto').value

    if (objeto !== '') {

        //*verificar se o valor informado já existe dentro do array objetos
        //*se existir, exibir alert com a mensagem 'Objeto já foi adicionado'
        //se não existir:
            //*incluir o valor preenchido no campo dentro do array
            //*efetuar um console.log do array para debug(checar se está funcionando)
            //*limpar o valor contido no campo de entrada de texto('')

        if (objetos.indexOf(objeto) == -1) {

            objetos.push(objeto)
            console.log(objetos)
            objeto = ''

        } else {

            alert('Objeto já foi adicionado!')

        }

        
    } else {

        alert('Informe um valor válido!')

    }
}

function ordenar () {

    //ordenar por ordem alfabetica (sort)
    //efetuar um console.log do array para debug
    objetos.sort()
    console.log(objetos)
    

}