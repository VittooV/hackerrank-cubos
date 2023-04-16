const palavras = ['morcos', 'morcia', 'vito', 'morales', 'morio'];
let primeiraLetra = 'm';
let segundaLetra = 'a';
let soma = 0;

for (let palavra of palavras) {
    if (primeiraLetra === palavra[0] && segundaLetra === palavra[1]) {
        console.log(palavra);
        soma++;
    }
}

if (soma === 0) {
    console.log('nenhuma');
}


