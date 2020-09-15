## Eventos

```js

// buscar elemento por tag  
let meuElemento = documento.getElementsByTagName('button');

// buscar elemento por classe
// buscar elemento por id
// buscar elementos de forma independente


```

> Resumo

São ações condicionadas a algum tipo de resposta feita pelo usuário;
- Clicks
- Apertar ou soltar teclas do teclado
- Movimentos de mouse

E como estamos lidando com JavaScript, podemos atribuir regras de lógica
para essas ações do usuário, famosos `handlers`.

> Visão Geral

Eventos são ações ou ocorrências que acontecem no sistema que estamos desenvolvendo, no qual este te alerta sobre essas ações para que você possa responder de alguma forma, se desejado. Por exemplo, se o usuário clica em um botão numa pagina web, você pode querer responder a esta ação mostrando na tela uma caixa de informações. Nesse artigo, nós iremos discutir sobre alguns conceitos importantes envolvendo eventos, e veremos como eles funcionam nos browsers. Isto não será algo cansativo para estudar; somente o que você precisar saber até agora.

Referência: [Mozzila][https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Elementos_construtivos/Events]


## Handlers

> Resumo:

Esse é um termo bastante comum no universo JavaScript quando estamos lidando com eventos,
sempre que ver um termo como `handler`, pense em `manipulação de eventos`.

> Visão geral

Cada evento disponivel possui um manipulador de eventos(event handler), que é um bloco de código 
(geralmente uma função JavaScript definida pelo usuário) que será executado quando o evento for 
disparado. Quando esse bloco de código é definido para rodar em resposta a um `evento que foi disparado,` 
nós dizemos que estamos `registrando um manipulador de eventos`. Note que manipuladores de eventos 
são, em alguns casos, chamados de ouvinte de eventos(event listeners) — eles são praticamente 
intercambiáveis para nossos propósitos, embora estritamente falando, 
eles trabalhem juntos. Os ouvintes escutam o evento acontecendo, 
e o manipulador é o codigo que roda em resposta a este acontecimento.

Referência: [Mozzila][https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Elementos_construtivos/Events]


Exemplo: 

Dado que temos um formulário, o usuário deverá clicar no botão `enviar`, 
espera-se que seja **submetido** o formulário. Esse ato de enviar, deve possuir alguma 
lógica/regra de negócio por exemplo:
 
Regras: 
 Antes de enviar seria viável validar as regras abaixo:

 1. Validar se todos os campos foram devidamente preenchidos: 
  - Campo: Nome 
  > input text
  - Campo: E-mail
  > input email
  - Campo: Sexo
  > input radio
  - Campo: Assunto
  > input select
  - Campo: Mensagem
  > input textarea

 2. Se o formulário estiver vazio:
 - Botão `<enviar>` ficará desabilitado.

 2. Se o formulário estiver preenchido:
 - Botão `<enviar>` ficará habilitado.

 3. Após clicar no botão `<enviar>`, caso tenha retornado `status 200`,
 deverá exibir uma mensagem na tela: `Seus dados foram enviado com sucesso.`

 4. Após clicar no botão `<enviar>`, caso tenha retornado `status 500`,
 deverá exibir uma mensagem na tela: `Ops, infelizmente ocorreu um erro ao enviar seus dados.`

 5. Após clicar no botão `<enviar>`, caso tenha retornado `status 401`,
 deverá exibir uma mensagem na tela: `Ops, ocorreu algum erro no preenchimento das suas informações.`

OBS: Apenas por esse formulário tradicional, já conseguimos analisar que existe uma 
responsabilidade do lado de quenm desenvolver interfaces, temos que `interagir e reagir`
conforme as ações do usuário, integrando junto a isto ás regras de negócio, o papel 
do front-end é direcionar para que o caminho do usuário seja "feliz". 

## Criando eventos

 - Devemos atribuir o evento a um elemento, por exemplo um botão.
 - Depois inserir um `listener`(ouvir o evento) e o tipo de evento como argumento(click).
 - Com isso, o elemento responderá por este evento e, obviamente, os outros da página não;

 ```js
 let button = document.querySelector('#button-primary');

 button.addeventListener('click', function() {
   console.log('clicou no botão');
 })
 ```

 ## Removendo eventos

 - Assim como podemos inserir eventos, podemos remove-lo.
 - Para fazermos isso, basta adotarmos o método `removeEventListener`, onde passamos o evento e a função
 da qual o evento está sendo escutado;

 ```js

  let buttonSecond = document.querySelector('.button-second');

  function sayHello() {
    console.log('clicou');
  }
  button.addEventListener('click', sayHello);

  buttonSecond.addEventListener('click', function() {
    button.removeEventListener('click', sayHello);
  });
 ```

 ## Event Object

 Quando criamos eventos, temos a opção de utilizar um argumento opcional,
 que é chamado de `objeto do evento`. Por ser um objeto, sabemos que ele irá prover propriedades que podem ser utilizadas para favorecer nosso
 desenvolvimento.

 ```js
  function sayName(event) {
    console.log(event);
  }
  
  // forma 
  button.addEventListener('click', sayName);
 
  // com função anônima
  buttonThird.addEventListener('click', function(event){
    console.log(event);
  });
 ```

## Propagação de Eventos: stopPropagation

Quando não definimos um elemento muito bem (seletor brando) ou um elemento
está dentro de outro que tem um evento. Ocorre o que chamamos de `propagação`. Pode ocorrer propagação ou seja um elemento ativar o evento
de outro elemento que está na sua instância de execução.

Para que possamos evitar esse efeito colateral, o JavaScript nos fornece
um `método` chamado **stopPropagation**.

```js

let p = document.querySelector('p');
let button = document.querySelector('button');

p.addEventListener('click', function() {
  console.log('click no item 1);
});

button.addEventListener('click', function() {
  console.log('click no item 2');
});
```

## Prevent Default

Existem comportamentos/ações que já estão intrínsecos em alguns elementos do HTML, por exemplo: 
 - Click no link.
 - Submeter informações no formulário

Entretanto, podemos querer alterar esse comportamento nativo que
o browser dispõe nativamente.

> Exemplo: 

```js

let meuLink = document.querySelector('a');

meuLink.addEventListener('click', function(e){
  e.preventDefault();
  console.log('clicou mas não alterou o link');
});

```

## KeyEvents

Falamos sobre eventos nativos e como podemos atribuir nos elementos HTML, adotando o JavaScript, agora vamos lidar com eventos a partir de ações via `hardware` como teclado e mouse.

> Para lidarmos com eventos no teclado.

- Sempre que uma tecla é pressionada, são gerados os eventos
`keyup e keydown`.
- Sabendo disso, podemos realizar ações para esses eventos;

> keyup é quando liberamos a tecla
> keydown é quando pressionamos a tecla

```js
window.addEventListener('keydown', function(e) {
  if(e.key == 'v') {
    console.log('apertou a tecla v')
  }
});

```

## Eventos de Mouse

Assim como vimos que conseguimos monitorar os eventos do teclado com keydown e keyup, podemos fazer o mesmo para o mouse. No caso nos temos dois eventos que seria o `mousedown e
o mouseup`. Se quiser monitorar o clique duplo, temos tamvém o `Dblclick`. 


```js
let button = document.querySelector('button');
button.addEventListener('dblclick', function() {
  console.log('Ativou o clique duplo');
});

```

## MouseMove

- Podemos ativar eventos com a movimentação do mouse também.
- Através do evento `mousemove`, podemos detectar a posição do ponteiro do mouse na tela;

```js

window.addEventListener('mousemove', function(e) {
  console.log(e.x);
  console.log(e.y);
});

```


## Scroll

- Podemos atribuir eventos ao scroll da tela adotando o evento `scroll`.

```js

window.addEventListener('scroll', function(e) {
  if(window.pageYOffset > 100) {
    console.log('chegou na posição');
  }
});
```

## Focus

Esse evento é muito utilizado em formulários, quando estamos
em um determinado input e vamos para o próximo, podemos atribuir um evento e com isso fazer a regra de validação.

- Focus: atribui quando ele recebe foco.
- Blur: quando ele perde o foco.

```js
let input = document.querySelector('input');

input.addEventListener('focus', function() {
  console.log('foco no input');
});

input.addEventListener('blur', function() {
  console.log('perdeu o foco');
});
```

## Load 

```js

window.addEventListener('load', function() {
  alert('Seja bem vindo!');
});


```