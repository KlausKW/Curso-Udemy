const testar = [7.7, 8.9, 6.3, 9.2]
console.log(testar[0], testar[3]);

// caso dentro do array nao tiver nenhum valor ele imprimi 'undefined'
console.log(testar[4]);

testar[4] = 10
console.log(testar);

//lengyh mostrará quantos elemento tem dentro de um array
console.log(testar.length);

testar.push({id: 3}, false, null, 'teste')
console.log(testar);
//pop usa quando for tirar um elemento de um array
console.log(testar.pop()); // tirariar o ultimo elemento de um array

delete testar[0]
console.log(testar);

console.log(typeof testar);

