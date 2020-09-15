let button = document.querySelector('button');
let buttonSecond = document.querySelector('.button-second');
let buttonThird = document.querySelector('.button-third');

function sayHello() {
  console.log('clicou');
}

button.addEventListener('click', sayHello);

buttonSecond.addEventListener('click', function() {
  console.log('remover evento');
  button.removeEventListener('click', sayHello);
});

function sayName(event) {
  console.log(event);
}

buttonThird.addEventListener('click', function(event){
  console.log(event);
});