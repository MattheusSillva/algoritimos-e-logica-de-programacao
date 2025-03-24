function inverterPalavra(str) {
// exemplo = "melancia", objetivo - "aicnalem";
const palavraAoContrario = [];

const letrasSeparadas = str.split('');

for (let i = str.length - 1; i > -1; i--) {
    palavraAoContrario.push(letrasSeparadas[i])
}
    return palavraAoContrario.join('')
}

console.log(inverterPalavra('melancia'))