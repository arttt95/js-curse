var nome = prompt('Insira seu nome:')
var altura = prompt('Insira sua altura em centímetros:')
var peso = prompt('Insira o seu peso:')

altura = parseInt(altura)
peso = parseInt(peso)

altura /= 100

var massa = peso / (altura * altura)

if (massa < 16) {
    var classificacao = 'Baixo peso muito grave'
} else if (massa >= 16 && massa < 17) {
    var classificacao = 'Baixo peso grave'
} else if (massa >= 17 && massa < 18.5) {
    var classificacao = 'Baixo peso'
} else if (massa >= 18.5 && massa < 25) {
    var classificacao = 'Peso normal'
} else if (massa >= 25 && massa < 30) {
    var classificacao = 'Sobrepeso'
} else if (massa >= 30 && massa < 35) {
    var classificacao = 'Obesidade grau I'
} else if (massa >= 35 && massa < 40) {
    var classificacao = 'Obesidade grau II'
} else if (massa > 40) {
    var classificacao = 'Obesidade grau III'
} else if (nome === null && altura === null && peso === null) {
    alert('Você não informou nenhum valor')
}

alert(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como: ' + classificacao)
