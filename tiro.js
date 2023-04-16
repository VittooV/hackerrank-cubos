const disparos = ['0', '10', '50', '70', '80', '30'];
let soma = 0;

for (tiro of disparos) {
    if (tiro >= 70) {
        soma++;
    }
}
if (soma >= 3) {
    console.log(soma);
} else {
    console.log("ELEMINADO");
}