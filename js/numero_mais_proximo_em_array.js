function proximoNumero(numeroReferencia, arrayNumeros) {
    let numeroMaisProximo = arrayNumeros[0];
    let diferenca = Math.abs(numeroReferencia - numeroMaisProximo);

    for (let i = 1; i < arrayNumeros.length; i++) {
        let numero = arrayNumeros[i];
        let diferencaNova = Math.abs(numeroReferencia - numero); 

        if (diferencaNova < diferenca) {    
            numeroMaisProximo = numero;
            diferenca = diferencaNova;
        }
    }
    
    return numeroMaisProximo;
}

console.log(proximoNumero(11, [10, 13, 67, 88, 74]))