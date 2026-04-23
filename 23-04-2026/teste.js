let a = 10;
let b = 3;

console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Resto da divisão:", a % b);
console.log("Exponenciação:", a ** b);

console.log("__________________________________");

let precoVenda = 150.78964;


console.log("Preço de venda arredondado para 2 casas decimais:", precoVenda.toFixed(2));
console.log("Preço de venda arredondado para 1 casa decimal:", precoVenda.toFixed(1));

let nota = 7.4;

console.log("Nota arredondada para o inteiro mais próximo:", Math.round(nota));
console.log("Nota arredondada para baixo:", Math.floor(nota));
console.log("Nota arredondada para cima:", Math.ceil(nota));


let aleatorio = Math.random();

console.log("Número aleatório entre 0 e 1:", aleatorio);
console.log("Número aleatório entre 0 e 100:", Math.floor(aleatorio * 100));
console