1) Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.

```js
let vetor = [1,2,3,4,5];
let sum = 0;
for (let i=0; i < vetor.length; i++) {
  sum= sum + vetor[i];
}
```


```js
let vetor = [1,2,3,4,5];
// 15
const somadora = (valorAntigo, valorNovo) => valorAntigo + valorNovo;
const soma =  vetor.reduce(somadora, 0);
console.log('soma:' soma);

```


2) Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.


3) Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.


4) Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor (dica: utilize reduce)


5) Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) 
Dica 1: utilize reduce, filter e keys;
Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício)


6) Dado um vetor com números, retorne somente os números pares;


7) Dado um vetor com números, retorne somente os números ímpares;

8) Crie o corpo da função de forma que ela realize as 4 operações aritméticas.
Exemplo: Uma função é chamada da seguinte forma: calculadora(10, '+', 20)


9) Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo.
 Exemplo:
  const soma = (num1, num2) => num1+num2
  const calculadoraFn = (....) => ….
  calculadoraFn(10, soma, 20)