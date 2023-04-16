const resultados = ['v', 'e', 'v', 'e'];
let pontos = 0;

for (let resultado of resultados) {
    if (resultado === 'v') {
        pontos += 3;
    } else if (resultado === 'e') {
        pontos += 1;
    }
}
console.log(pontos);