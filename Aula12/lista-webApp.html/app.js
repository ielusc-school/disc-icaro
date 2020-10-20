console.log('james');

// Acessando elementos?

console.log(document);
// Sabemos que o Documento é a cópia exata do HTML dentro do JavaScript, dessa forma o JS consegue manipular o HTMl. O que precisa ficar claro que esse Document não se trata de uma API do JavaScript e sim do Navegador.


// acessando nosso input?

let inputTexto = document.getElementById('js-input');

console.log(inputTexto);

let button = document.querySelector('button');
console.log(button);
let listas = document.querySelectorAll('li');
console.log(listas);

// Como podemos alterar elementos? 

// pegando o primeiro item da nossa lista
// usando o querySelectorAll
let itemListaOne = document.querySelectorAll('li')[0];
console.log(itemListaOne);


// retornando o texto do elemento
itemListaOne.textContent; 

// alterando o conteúdo do item 1
itemListaOne.textContent = 'Maça'; 

// acessando o HTML
itemListaOne.innerHTML; 

// retorna o elemento HTML
itemListaOne.outerHTML; 

// alterando o elemento do item 1 usando innerHTML
itemListaOne.innerHTML = '<p>Jaiminho o Carteiro</p>';
console.log(itemListaOne);

// removendo elementos

let itemListaTwo = document.querySelectorAll('li')[1];
itemListaTwo.remove()

// criando elementos

let createNewItem = document.createElement('li');
createNewItem.innerText = 'Meu novo item da lista';

// adicionando dentro de uma lista

let lista = document.querySelector('div').appendChild(createNewItem);


// let lista1 = document.querySelector('.list-item:first-child').insertAdjacentHTML('beforeAgain', createNewItem.outerHTML);


let lista2 = document.querySelector('.list-item').insertAdjacentHTML('afterend', createNewItem.outerHTML);

// copiano elemento
let cloneElemento = document.querySelector('#js-input').cloneNode(true);


// acessando o valor do input 
let field = document.querySelector('#js-input').value;
console.log(field);

let field2 = document.querySelector('#js-input').getAtribute('type');
let field3 = document.querySelector('#js-input').getAtribute('type', 'number');
let field4 = document.querySelector('#js-input').getAtribute('type', 'radio');

// retorna as classes de CSS do elemento
let field5 = document.querySelector('#js-input').classList;

// adicionar classe css via JS
let field6 = document.querySelector('#js-input').classList.add('bg-input');

// checar se existe a classe CSS
let field7 = document.querySelector('#js-input').classList.contains('james');

// remover a classe CSS
let field7 = document.querySelector('#js-input').classList.remove('james');

// criar efeito toggle
let field8 = document.querySelector('#js-input').classList.toggle('james');

// 
document.querySelector('#js-input').style;
//background-color  = backgroundColor

document.querySelector('#js-input').style.backgroundColor = 'black';

console.log(field);









