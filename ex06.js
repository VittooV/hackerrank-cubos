//Quantos produtos foram comprados
//os valores
//se foram mais que 5, descartar o menor valor
//menos que 5, somar tudo

const produtos = [200, 200, 300, 200];
let total = 0;

let menor = produtos[0];

for (let valor of produtos) {

    total += valor;
    if (valor < menor) {
        menor = valor;
    }
}

if (produtos.length >= 5) {
    //com desconto
    console.log(`O total é de R$ ${total - menor}`);

} else {
    //sem desconto

    console.log(`O total é de R$ ${total} reais`);
}

