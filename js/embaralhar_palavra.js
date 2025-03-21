function embaralharPalavra(palavra) {
    const palavraOrdenada = palavra.split('');
    
    const palavraEmbaralhada = [];
    
    while (palavraOrdenada.length) {
        const numeroAleatorio = parseInt(Math.random() * palavra.length);
        const letraAleatoria = palavraOrdenada.splice(numeroAleatorio, 1)[0];
    
        palavraEmbaralhada.push(letraAleatoria);
    }

    return palavraEmbaralhada.join("");
}

console.log(embaralharPalavra('javascript'));