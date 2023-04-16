const nomesPaises = ['Brasil', 'Canadá', 'EUA', 'Argentina', 'Paraguai'];

nomesPaises.push('Uruguai')
console.log(nomesPaises);
nomesPaises.pop();
console.log(nomesPaises);
nomesPaises.unshift('Chile');
console.log(nomesPaises);
nomesPaises.shift();
console.log(nomesPaises);
const ultimoPais = nomesPaises.length;
console.log(nomesPaises[ultimoPais - 1]);
console.log(nomesPaises[1]);
console.log(nomesPaises[2]);