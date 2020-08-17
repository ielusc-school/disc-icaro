## Loops

É muito comum a situação em que se precisa repetir certo trecho de um programa determinado por um número de vezes. Por exemplo, quando é preciso calcular a folha de pagamento de uma empresa, sendo que o mesmo cálculo é efetuado para cada um dos funcionários.

Essas estruturas de repetição são muitas vezes chamadas de `Laços ou de Loops`.

A classificação das estruturas de repetição é feita de acordo com o conhecimento ou não do número de vezes que os comandos serão executados. Então, os laços dividem-se em:

- laços contados: quando se sabe quantas vezes o comando composto deverá ser executado.
- laços condicionais: quando não se sabe o número de vezes que o conjunto de comandos no interior do laço será repetido.


## Arrays 

Também amplamente conhecidos como Conjuntos, ele nos fornce uma condição de adicionar 
um conjunto de valores a uma variável.

Arrays sempre devem ser escritos entre colchetes, separando os valores por vírgulas:

```js

let companyNotebook = ['sony',  'dell', 'toshiba', 'lg', 'acer', 'hp', 'positivo', 'apple'];
let arrayNumbers = [10,0, 1, 3, 4];
```

1. Índices

Acessando um índice da posição do nosso array.
Sabendo que o índice sempre inicia a partir do 0, qual é o índice que está a marca toshiba 
no array anterior? 

```js
console.log(companyNotebook[2]);
```

2. Propriedades

São informações que podem ser verificadas de um valor, quase todos os valores de `JavaScript`
possuem propriedades menos `null e undefined` conforme vimos nas aulas iniciais eles são tipos de dados primitivos e não possuem autoboxing. 

Podemos acessar propriedades de duas maneiras:

 
```js

let name = 'joao';
console.log(name.length);

let numeros = [10,9, 3, 2, 1, 5, 7, 8];
console.log(numeros.length);
console.log(numeros['length']);
console.log(numeros[1])
```

3. Métodos

Conforme dito na aula de Objetos `métodos` são propriedades que funcionam como funções;

> Strings e arrays contém métodos;

```js

let marca = 'Samsung';
console.log(typeof marca.toUpperCase);
console.log(marca.toUpperCase());
```

Em linhas gerais então temos:

> string.propriedade
> string.metodo()

## 3.1 Push, Pop, Shift e Unshift

 - Push: adiciona elementos sempre no fim do array;
 - Pop: remove elementos sempre no fim do array;
 - Shift: remove elementos sempre no ínicio do array;
 - Unshift: adiciona elementos sempre no ínicio do array;

```js
let carros = ['volks', 'ferrari', 'citroen'];
carros;

carros.pop();

carros;
carros.push('ford');
carros


carros.shift();
carros;

carros.unshift('subaru');
carros;
```

## 3.2 IndexOf e lastIndexOf

- indexOf > Encontra o índice de um determinado elemento;
- lastIndexOf : Encontra o último índice de um elemento;

```js

let numeros = [10, 9, 3, 2, 8, 1, 5, 7, 8];

numeros.indexOf(8);
numeros.lastIndexOf(8);
```


## 3.2 Slices

Retorna um array a partir de outro array;
O array retornado é  determinado pelos parâmetros que são os índices de início e fim do novo array;

```js
let numeros = [1, 2, 3, 4, 5];

numeros.slice(2,3);
numeros.slice(3);
numeros.slice(-3);
numeros.slice(-2);
numeros.slice(-1);

```

## ForEach

Similar ao for ele itera sobre cada elemento do nosso array.

```js
const nums = [1,2,3,4,5,6];

nums.forEach(num =>  {
  console.log(num);
});

```


Quando precisamos usar laços de repetição? 

Vamos pensar em problemas do tipo:

1. O Ifood precisa calcular a média de preços de pratos referentes a massa?
2. O Nubank precisa aplicar um desconto para todos os alunos da IELUSC de SI baseado na sua nota?
3. Mercado livre, precisa saber quantos Notebooks tem á venda na sua plataforma e aplicar desconto de 10%.

























Bem, vamos pensar no seguinte cenário abaixo:
1. PetShop precisa saber algumas informações para validar se o negócio está dando certo.

a) Quantidade de animais que atendem;
b) Qual tipo/genêro de animais são mais atendidos.
c) Quantidade de animais que não possuem comportamente dócil.
d) Calcular a idade média dos animais que são atendidos.


```js
const animal = [
  {type: 'dog', name: 'bets',    age: 3, funny: true},
  {type: 'dog', name: 'colosso', age: 3, funny: true},
  {type: 'dog', name: 'dark',    age: 1, funny: true},
  {type: 'dog', name: 'jussara', age: 3, funny: true},
  {type: 'cat', name: 'elvis',   age: 2, funny: false},
  {type: 'cat', name: 'jone',    age: 2, funny: false},
  {type: 'cat', name: 'tulipa',  age: 2, funny: false},
  {type: 'cat', name: 'maizena', age: 2, funny: false} 
];
```

