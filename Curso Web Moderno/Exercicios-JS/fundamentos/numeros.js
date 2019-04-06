const peso1 = 1.1
const peso2 = Number('2.0')

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // ele imprimira o true ou false quando o variavel for inteiro
console.log(Number.isInteger(peso2));

const avaliaacao1 = 9.423
const avaliaacao2 = 8.424

const total = avaliaacao1 & peso1 + avaliaacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)); // tirar ou controlara as casas decimais

console.log(media.toString()); // Converte para um resultado real da conta

console.log(media.toString(2)); // Converte para binario
