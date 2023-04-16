const palavra = 'brasil';
let contagem = 0;

for (let letra of palavra) {
    if (letra === 'a') {
        contagem++;
    }

}
console.log(contagem);