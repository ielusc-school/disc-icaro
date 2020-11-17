## Notação Ponto

```js
console.log(Math.ceil(6.1));
const meuObj = {};

meuObj.name = 'Carlos Santana';
meuObj['name'] = 'Joe Ramone';

function Obj(nome) {
  this.nome = nome;
}
```

```js

const bank = {
  id: 001,
  name: 'Banco do Brasil S.A.',
 }

bank.address = {
 logradouro: 'Rua Antonio da Silva',
 number: '11',
 bairro: 'Vila Nova',
 cidade: 'Joinville',
 estado: 'SC'
}

let bancoNumeroENome = `ID: ${bank.id}, Nome: ${bank.name}`

console.log(`notação com ponto: ${bank.name}`);
console.log(`notação com colchete ${bank['name']}`);
bank.address['cidade']

```

1. Criar um objeto banda:
2. Propriedades da banda:
 - id, nome, número de integrantes, localização
3. Retornar somente o nome e número de integrantes
4. Retornar a localização da banda.

* Usando ponto e colchetes. 



## Operadores

Vimos que no JavaScript assim como qualquer outra linguagem de programação temos os operadores.
Documentação: [Mozilla Operadores - Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators)

- Operadores de atribuição.
- Operadores de comparação.
- Operadores aritméticos.
- Operadores bit a bit.
- Operadores lógicos.
- Operadores de string.
- Operador condicional(ternário)
- Operador vírgula.
- Operadores unário
- Operadores relacionais

## Operador de Atribuição

Sempre o símbolo da operação algébrica virá antes do sinal de igualdade informando assim qual
operação será feita.

```js

const a = 3;
let b = 4;

b += a // b = b + a
console.log(b);

b -= a // b = b - a
console.log(b);

b *= a // b = b * a
console.log(b);

b %= a // b = b % a
console.log(b);
```

### Operador Destructuring

Segundo a Mozilla:
"...A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão 
JavaScript que possibilita extrair dados de **arrays ou objetos** em variáveis distintas.

> Declarando objetos:
```js
let person = {
  name: 'Mel Paez',
  age: 3,
  address: {
    logradouro: 'Rua Tuiti',
    numero: 99,
    bairro: 'Vila Nova',
    cidade: 'Joinville',
    estado: 'SC',
    cep: 89228-920,
  }
};
```

> Como podemos extrair a informação nome e idade do objeto `person`?

Usamos a notação ponto, por exemplo;
```js
let nome =  person.name;
console.log(nome);

let idade= person.age;
console.log(idade);

let getPersonNameAndAge = [person.name, person.age];
console.log(getPersonNameAndAge)
```

Pensando nisso, vamos ver na prática como o destructuring, funciona:

```js

const { name, age } = person;
console.log(name, idade);

// declarando um nome para nossa propriedade
const {name: nome, age: idade } = person;
console.log(nome, idade);

// quando passamos uma propriedade sem valor, qual será o retorno dela?
const {sobrenome, bomHumor = false} = person;
console.log(sobrenome, bomHumor);

// Como podemos acessar elementos filho dentro do nosso objeto? 
// Como pegamos logradouro, numero e cep usando destruct?

const { address: {logradouro, numero, cep}} = person;
console.log(logradouro, numero, cep);
```

> Declarando arrays: 
const [a] = 10;
console.log(a);


```js
function rand({ min = 0, max = 1000}) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const obj = {max : 10, min: 40}
console.log(rand(obj));
console.log(rand({min: 990}));
console.log(rand({}));
console.log(rand());
```

```js
const [a,b,c,d] = [3,5,1,15];

const soma = a+b+c+d;
const subtracao = a+b+c+d;
const multiplicacao = a+b+c+d;
const divisao = a+b+c+d;
const modulo = a%2;

```

## Functions 

> First-Class Object, First-Class Citizens ou Higher-order Functions

O que podemos fazer com funções? Basicamente passamos parâmetros e ela retorna valores.

Porém, quando começamos a pensar na função como um dado, podemos ter n possibilidades de poder lidar com ela, nesse conceito. 

1. Criando uma função de forma literal:

```js
function minhaFn() { console.log('Aula de JavaScript')}
minhaFn();
```

2. Armazenar uma function em uma variável:

```js

const minhaFn2 = function() { console.log('Aula de JavaScript2')}
minhaFn2();
```

3. Armazenar em um array:

```js
const array = [function (a,b) { return a+b }, minhaFn, minhaFn2];
console.log(array[0](1,2));
```

4. Armazenar em um atributo de objetos:

```js
const meuObj = {};
meuObj.speak = function(name) {
  console.log(`Meu nome é ${name}`);
}
console.log(meuObj);

console.log(meuObj.speak('Carlota'));
```

5. Passando função como parâmetro para outra função

```js
function run(fun) {
  fun();
}

function fun() {
  console.log('hehehe');
}

run(fun);
```

6. Uma função pode retornar/conter uma função.

```js

function soma(a,b) {
  return function (c) {
    console.log(a + b + c);
  }
}

soma(2,3)(4)
```

## Arrow Functions 

Antes de entrarmos nesse tópico, precisamos revisitar o que estamos vendo hoje com DOM e 
[Eventos](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/addEventListener).
Sabemos que para atribuir eventos(ação) utilizando o JavaScript, podemos adotar `eventListener` 
que são acionadas por `funções anônimas`, 
[referência sobre o conceito](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/function).

```html
<button>Entrar agora!</button>


<script>
// adicionando uma variável ao botão
// percorrendo o HTML e conforme encontrar `faça algo`
let meuButton = documento.querySelector('button');
console.log(meuButton);

// no famoso "faça algo", é uma AÇÃO esperada no caso um evento
meuButton.addEventListener('click', function(event) {
  console.log(event);
}
</script>
```

Partindo desse mesmo principio, se fosse criar uma function que verificasse se a nota do aluno,
for maior ou igual a 7, exiba que está `aprovado` e caso contrário exiba `reprovado`, como seria?

```js
const resultado = function(nota) {
  if(nota >= 7) {
    return 'Aprovado'
  } else {
    return 'Reprovado'
  }
}

console.log(resultado(4));
console.log(resultado(8.5));

```
Nosso código está muito `verboso`, que tal diminuir usando o  `operador ternário`, como ficaria?

```js
const resultado = function(nota) {
  return nota >= 7 ? 'Aprovado': 'Reprovado';
}

console.log(resultado(4));
console.log(resultado(8.5));
```

Como seria esse exemplo adotando o conceito de `Arrow Functions`?

```js
const resultado = function(nota) {
  return nota >= 7 ? 'Aprovado': 'Reprovado';
}

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

// passando um corpo para a function
const resultado = nota => {
  return nota >= 7 ? 'Aprovado': 'Reprovado';
}
```




