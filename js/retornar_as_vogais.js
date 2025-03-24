function pegarVogais(str) {
const letras = str.toLowerCase().split('');
let totVogais = 0;

let vogais = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < str.length; i++) {
    if (letras[i] == "a" || letras[i] == "e" ||letras[i] == "i" ||letras[i] == "o" ||letras[i] == "u") {
        totVogais += 1;
    }
}
    return totVogais;
}

// console.log(pegarVogais('Morango'));

// Outra abordagem

function pegarVogais(str) {
    const letras = str.toLowerCase().split('');
    let totVogais = 0;
    
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(letras[i])) {
            totVogais += 1;
        }
    }
        return totVogais;
    }
    
    console.log(pegarVogais('paralelogramo'));