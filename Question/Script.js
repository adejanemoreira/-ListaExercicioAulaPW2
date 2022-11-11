//Dado um array de inteiros na entrada, calcule o quadrado de cada elemento e salve em um novo array
const array = [2,3,4,5];
const arrSub = array.map((num) => Math.pow(num,2));
console.log(arrSub);
//A partir de um array informado, mostre a soma de todos os elementos positivos
let arr = [1, 2, 3, 4, 5, 6];
let result = arr.reduce((acumulador, valorAtual) => {
if(valorAtual > 0) {
return acumulador + valorAtual
} else {
return acumulador
}
});
console.log(result)
//Ordene o array de inteiro informado em ordem decrescente.
const array = {1,2,3,4,5]
const result  = array.short((a,b) => b - a);
console.log(array);
//Calcule a média dos elementos de um array de inteiro.
const arr = [1, 2, 3, 4, 5];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);

//Gerador de iniciais: a partir do nome completo do usuário, mostre as iniciais do seu nome.
var nome = 'Adejane';
for (var i = 0; i < nome.length; i++) {
console.log(nome.charAt(i));
}
//Calcule o fatorial de um número usando array. 

console.log(fatorial(5));
//[Extra] Dado um array de 2 dimensões, conte e mostre quantos elementos são distintos.
const arr = ["a","b","a","d","b"];
const uniqueCount = new Set(arr).size;
console.log(uniqueCount);





