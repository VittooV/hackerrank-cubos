//>>><>
//ler a sequencia
//identificar o lado
//imprimir o numero do slide final

const lados = ['>', '>', '>', '>', '>', '>', '>', '>', '>', '<', '<', '<', '<', '<', '>'];
let contagem = 0;
const slides = 6;

for (let lado of lados) {
    if (lado === '>') {
        if (contagem === slides) {
            contagem = 0;
            console.log(contagem)
        }

        contagem++;
        console.log(contagem);

    } else {
        if (contagem === 0) {
            contagem = slides;
            console.log(contagem);
        }
        contagem--;
        console.log(contagem);
    }

}