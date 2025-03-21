const palavra = 'javascript';
const palavraOrdenada = palavra.split('');

const palavraEmbaralhada = [];

while (palavraOrdenada) {
    const numeroAleatorio = parseInt(Math.random() * palavraOrdenada);
    const letraAleatoria = palavraOrdenada[numeroAleatorio]

    console.log(letraAleatoria)

    

}