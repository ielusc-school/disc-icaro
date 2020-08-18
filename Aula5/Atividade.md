# Atividade 

Quando precisamos usar laços de repetição? 

1. Vamos pensar em problemas do tipo:

1. O Ifood precisa calcular a média de preços de pratos referentes a massa?
2. O Nubank precisa aplicar um desconto para todos os alunos da IELUSC de SI baseado na sua nota?
3. Mercado livre, precisa saber quantos Notebooks tem á venda na sua plataforma e aplicar desconto de 10%.


2. Vamos pensar no seguinte cenário abaixo:

Um PetShop precisa saber algumas informações para validar se o estabelecimento está sendo rentável:
Com isso ele faz as seguintes perguntas para a administradora:

a) Quantidade de animais que são atendidas;
b) Quais os genêro dos animais são mais atendidos.
c) Quantidade de animais que não possuem comportamento dócil.
d) Calcular a idade média dos animais que são atendidos.
e) Precisa saber quais os dias e o horário que tem maior concorrência por solicitação de atendimento;

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