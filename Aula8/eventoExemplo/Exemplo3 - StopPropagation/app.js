let button1 = document.querySelector('.btn-one');
let button2 = document.querySelector('.btn-two');
let meuTexto = document.querySelector('p');

function sayHello(e) {
  console.log('clicou no botao 1', e);
  e.stopPropagation();
}

button1.addEventListener('click', sayHello)

button2.addEventListener('click', function() {
  console.log('clicou no botao 2');
});

meuTexto.addEventListener('click', function() {
  console.log('clicou no texto');
});




