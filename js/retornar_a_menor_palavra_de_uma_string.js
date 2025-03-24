const pegarMenorPalavra = (str) => {
    const palavras = str.trim().split(" ");
    let menorPalavra = palavras[0];

    for (let i = 1; i < palavras.length; i++) {
        if (palavras[i].length < menorPalavra.length) {
            menorPalavra = palavras[i]
        }
    }

    return menorPalavra
}

console.log(pegarMenorPalavra('Return the smallet word'))