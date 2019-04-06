// cod3r = pos0=c, pos1=o, pos2=d, pos3=3, pos4=r, pos5=' '
const escola = "Cod3r"

//o charAt ele pega os indices que esta no determinado posição
console.log(escola.charAt(4)); // imprimirá o 'r' que está na 4 posicao
console.log(escola.charAt(5)); // imprimirá ' ' pois na 5 posicao nao há um valor

//o charCodeAt ele imprimirá o numero baseado na tabela ASCII
console.log(escola.charCodeAt(3)); // imprimirá o '51' pois valor 3 na ASCII é 51

//o indexOf ele busca se o '3' existe no variavel escola e imprimi.
console.log(escola.indexOf('3'));

//o substring ele inicia a impreção apartir da posição 1
console.log(escola.substring(1));
//quando é digitado 0, 3  imprimira apartir da posicao 0 até 3
console.log(escola.substr(0, 3));

//comando .concat: faz uma concatenação de variavel com um string desejado
console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + escola + '!'); // .concat pode ser substituido pelo '+'


//comando .replace: substitui na posição determinada (neste caso 3 pos) em 'e'
console.log(escola.replace(3, 'e'));

//comando .split: ele gera um array para cada um elemento de acordo com caracter que separado por ','
console.log('Ana,Maria,Pedro'.split(','));

