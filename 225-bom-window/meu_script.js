var janela = null

function abrirPopUp() {
    // Verifica se a janela já está aberta e não foi fechada
    if (!janela || janela.closed) {
        // Abre uma nova janela e armazena a referência
        janela = window.open('http://google.com', 'NovaJanela', 'width=400,height=300')
    } else {
        alert("A janela já está aberta!")
    }
}

function fecharPopUp() {
    // Verifica se a janela foi aberta e não está fechada
    if (janela && !janela.closed) {
        janela.close();  // Fecha a janela
        janela = null;   // Reseta a referência
    } else {
        alert("A janela já está fechada ou não foi aberta.")
    }
}

// Função para monitorar o status da janela e atualizar a referência quando for fechada
function monitorarJanela() {
    if (janela && janela.closed) {
        janela = null; // Reseta a referência quando a janela é fechada
    }
}

// Monitora a janela periodicamente (a cada 1 segundo)
setInterval(monitorarJanela, 1000)
