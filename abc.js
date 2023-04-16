const frutas = ['maçâ', 'banana', 'melão', 'melancia', 'morango', 'llama'];
let acertou = 0;

for (let fruta of frutas) {
    for (let letra of fruta) {
        if (letra === 'm')
            acertou++;
        break;
    }

}
console.log(acertou);