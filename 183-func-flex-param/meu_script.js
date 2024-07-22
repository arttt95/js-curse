function soma (a, b) {
    b = b === undefined ? 0 : b
    return a + b
}

console.log(soma(7, 7))
console.log(soma(7, 7, 9, 15)) //desconsidera os 2 parâmetros adicionais

function soma2 (a, b, c) {
    return a + b + c
}

console.log(soma2(7, 7, 9, 15)) //desconsidera o único parâmetro adicional

//passando parâmetros a menos, o parâmetro faltando será atribuído como 'undefined' e o resultado da soma de um número + 'undefined' = NaN
console.log(soma(7))

//Se não for passado nenhum valor sendo que a função espera receber um número será somado undefined + undefined que será igual a NaN também
console.log(soma())