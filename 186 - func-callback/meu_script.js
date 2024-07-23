function exibir_artigo(id, callback_sucesso, callback_erro) {
    //lógica: recuperar o id via requisição http
    if (false) {
        callback_sucesso('Funções de callback em JS','Funções de callback são muito utilizadas.....')
    } else {
        callback_erro('Arquivos não recuperados')
    }
}

var callback_sucesso = function(titulo, descricao) {
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr/>')
    document.write('<p>' + descricao + '</p>')

}

var callback_erro = function(erro) {
    document.write('<p><b>Erro: </b>' + erro + '</p>')
}

exibir_artigo(1, callback_sucesso, callback_erro)