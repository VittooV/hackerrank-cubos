const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
let soma = 0;
let menorNota = 99999999;
let maiorNota = 0;


for (let nota of notas) {
    if (nota < menorNota) {
        menorNota = nota;
    }
    else if (nota > maiorNota) {
        maiorNota = nota;
    }
    soma = soma + nota;
}
if (notas[0] > maiorNota) {
    maiorNota = notas[0];
} else if (notas[0] < menorNota) {
    menorNota = notas[0];
}

console.log(menorNota);
console.log(maiorNota);
console.log((soma - menorNota - maiorNota) / (notas.length - 2));