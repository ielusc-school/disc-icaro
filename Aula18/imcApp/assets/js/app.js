const title = document.querySelector('.titulo');
title.textContent = 'Farmácia APP';

// forma 1
// função nomeada
// title.addEventListener('click', sayHello);
// function sayHello() {
//   console.log('cliquei aqui....');
// }

// forma 2
// fn anônima
// mostrar com arrow e sem arrow
title.addEventListener('click', () => {
  console.log('cliquei aqui....');
});


function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}




