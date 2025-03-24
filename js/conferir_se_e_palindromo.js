function isPalindrome(palavra) {

const partesPalavras = palavra.toLowerCase().split(' ');
const fraseSemEspaco = [];

for (parte of partesPalavras) {
    fraseSemEspaco.push(parte);
}

const palavraProntaSemEspacos = fraseSemEspaco.join("");

const letras = palavraProntaSemEspacos.split("");
const letrasInvertidas = [];

for (let i = palavraProntaSemEspacos.length -1; i > -1; i--) {
    letrasInvertidas.push(letras[i])
}

const palavraInvertida = letrasInvertidas.join("");

if (palavraProntaSemEspacos == palavraInvertida) {
    return "É um palindromo"
} else {
    return 'Não é um palindromo'
}

}

// console.log(isPalindrome("Apos a sopa"))

// outras tecnicas

function isPalindrome(palavra) {
    const palavraLimpa = palavra.toLowerCase().replace(/ /g, '');
    
    const letras = palavraLimpa.split("");
    const letrasInvertidas = [];
    
    for (let i = palavraLimpa.length -1; i > -1; i--) {
        letrasInvertidas.push(letras[i]);
    }
    
    const palavraInvertida = letrasInvertidas.join("");
    
    if (palavraLimpa == palavraInvertida) {
        return "É um palindromo";
    } else {
        return 'Não é um palindromo';
    }
    
    }
    
    console.log(isPalindrome("Socorram me subi no onibus em Marrocos"));
    

