## Resumo: 

Até agora só vimos sobre as partes que realmente fazem parte da linguagem JavaScript, como sua sintaxe e funções. Porém, quando estamos trabalhando em ambientes diferentes, nos são fornecidas algumas funcionalidades exclusivas do ambiente.

Nos navegadores possuímos funcionalidades como manipular elementos do HTML, acessar a câmera do dispositivo do usuário, geolocalização, responder aos cliques do mouse, etc.

Como o JavaScript é uma linguagem de programação que é executada assim que você acessa uma página, seria muito perigoso se ele não tivesse limites. Imagine o perigo se ao entrar em um site a sua câmera pudesse ser ligada sozinha ou o site ter acesso a todos os seus arquivos.

Quando estamos trabalhando com Node.js, que usa JavaScript fora dos navegadores, não temos HTML, apenas um terminal. Então no Node.js não faz sentido existir funções de acesso ao HTML ou resposta aos cliques, mas temos funções que podem, por exemplo, nos ajudar a criar um servidor.

Então, além das funcionalidades da linguagem, também devemos aprender as funcionalidades que o ambiente em que estamos trabalhando nos fornece.

Como estamos focando no JavaScript para navegadores neste curso, nas próximas aulas iremos aprender a manipular HTML e responder às interações do usuário. Então lembre-se que serão funcionalidades que apenas existem se você estiver trabalhando com o JavaScript dentro de um navegador.

## DOM

O HTML é formado por elementos que servem como nossos "blocos" para montar páginas. Esses elementos são representados pelas chamadas "tags". Cada tag indica ao navegador uma funcionalidade.

Tags são marcações que tem seu nome entre "<" e ">", como no exemplo:

Então temos o famoso DOM (Document Object Model - Modelo de Objeto de Documentos). Quando o navegador interpreta o HTML, cada um dos elementos é organizado em uma estrutura como uma árvore. Com isso, cada elemento é representado como um objeto (assim como os que aprendemos a criar), e o DOM fornece funções para acessarmos cada um desses elementos com o JavaScript.

Document Object Model - Modelo de Objetos de Documentos. 

Se trata de uma interface que representa documentos HTML e XML através de objetos.
Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.


## Window

O objeto window representa uma janela que contém um elemento DOM; a propriedade document aponta para o documento DOM document carregado naquela janela. Uma janela para um dado documento pode ser obtido usando a propriedade document.defaultView


```js

console.log(window);
// window se trata de um objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeigth; // retorna a altura do browser;
window.alert('exibir uma mensagem');
window.location.reload();
window.location.href();
```

## Document

O Modelo de Objeto de Documento  (DOM) é uma interface de programação para documentos HTML, XML e SVG . Ele fornece uma representação estruturada do documento como uma árvore. O DOM define métodos que permitem acesso à árvore, para que eles possam alterar a estrutura, estilo e conteúdo do documento. O DOM fornece uma representação do documento como um grupo estruturado de nós e objetos, possuindo várias propriedades e métodos. Os nós também podem ter manipuladores de eventos que lhe são inerentes, e uma vez que um evento é acionado, os manipuladores de eventos são executados. Essencialmente, ele conecta páginas web a scripts ou linguagens de programação.

Embora o DOM seja frequentemente acessado usando JavaScript, não é uma parte da linguagem JavaScript. Ele também pode ser acessado por outras linguagens.

Referência: [url](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM)


## Nó ou Node

Toda tag html é representada pelo objeto Element e por isso herda os 
seus métodos e propriedas. Element é um tipo de objeto Node.

Referência: [url](https://developer.mozilla.org/pt-BR/docs/Web/API/Element)

```js

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto
titulo.classList; // retorna as classes
titulo.id; // retorna o id
titulo.offsetHeight; // retorna a altura do elemento

titulo.addEventListerner('click', callback); // ativa a função callback 
// do click no título

  document.getElementsByTagName('button');
  document.getElementsByTagName('li');
  document.getElementById('taskId');
  document.getElementsByClassName('list-item');
  document.querySelector('li') // retorna sempre o primeiro item e apenas 1 elemento.
  document.querySelectorAll('button');
  document.querySelectorAll('#meuId');
  document.querySelectorAll('.minhaClasse');
  document.querySelectorAll('li:first-child');
  document.querySelectorAll('li:last-child');


document.querySelector('.list-item').textContent = 'Estudar sobre JavaScript';
document.querySelector('.list-item').textContent = '<strong> Preciso estudar Pilhas e Filas<strong>';
document.querySelector('.list-item').innerHTML = '<strong> Preciso estudar Pilhas e Filas<strong>';
document.querySelector('.list-item').outerHTML = '<strong> Preciso estudar Pilhas e Filas<strong>';

// removendo elementos 

document.querySelector('input').remove()

// adicionando elementos

let myTasks = document.createElement('<li> </li>');
myTasks.innerText('Aprender sobre CSSGrid');

document.querySelector('minhaLista').appendChild(myTasks);


```


## Percorrendo o DOM

```js

document.querySelector('ul'); // pegando a lista

document.querySelector('ul').children; // pegando os filhos

document.querySelector('ul').querySelectorAll('li'); // pegando todos os elementos da lista

/*

  ul 
    li tarefa1
    li tarefa2  >> vamos pegar esse elemento
    li tarefa3
  /ul  
*/


document.querySelector('ul').querySelectorAll('li')[1];
// tarefa 2

let item2 = document.querySelector('ul').querySelectorAll('li')[1];

// pegando o elemento pai
item2.parentElement;

// pegando os elementos irmãos 
el.nextElementSibling // elemento posterior a ele
el.previousElementSibling // elemento anterior a ele

```

## Manipulando atributos e valores


```js


document.querySelector('idInput').value;
document.querySelector('idInput').value = 'james bond';

document.querySelector('idInput').getAttribute('type');
document.querySelector('idInput').setAttribute('type', 'email');

// css

document.querySelector('idInput').classList; // retorna as classes do elemento

document.querySelector('idInput').classList.add('task-field'); // adicionadno classes

document.querySelector('idInput').classList.contains('task-field'); // checando se existe a classe
// true

document.querySelector('idInput').classList.contains('task-field2'); // checando se existe a classe
// false

document.querySelector('idInput').classList.remove('task-field'); // remove a classe


document.querySelector('idInput').classList.toggle('task-field'); // invertendo os valores da classe
// true

document.querySelector('idInput').style.backgroundColor = 'black'; // adicionando css inline


```


## Fixação

Selecione todas as opções com uma função do JavaScript que nos permite selecionar elementos pelo ID.
(Selectione até  2 opções)



document.getElementsByTagName().

document.querySelector().

document.getElementById().

document.getElementsByClass().


Selecione todas as opções que indicam nomes de relacionamentos entre elementos do DOM.
(Selecione até 3 opções)

parent.

son.

father.

child.

sibling.


Marque a opção que indica o nome da propriedade que nos possibilita alterar a propriedade CSS “background-color”.

backgroundColor.

background_color.

BackgroundColor.

background-color.

background color.