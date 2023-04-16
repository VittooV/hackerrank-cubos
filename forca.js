const palavra = 'abelha';
let chute = "a";
let acertos = 0;

for (let letra of palavra) {
    if (chute === letra) {
        acertos++;
    }
}

console.log(acertos);
