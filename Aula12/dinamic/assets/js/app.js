console.log('está rolando');

let list= [
  'banana', 
  'maça', 
  'pera', 
  'abacate',
  'tomate',
  'alface',
  'ameixa'
];

let listElement = document.querySelector('ul');
console.log(listElement);

function renderList() {
  let html = '';
  for(let item of list) {
    html += `<li>${item}</li>`;
  }
  listElement.innerHTML = html;
}

renderList();


let textItem = document.querySelector('#js-itemSacolao');
console.log(textItem);

let buttonItem = document.querySelector('button');
console.log(buttonItem);



// Criar uma fn com base no clique do meu botão
// Inserir o item na lista 

buttonItem.addEventListener('click', function(event) {
  console.log(textItem.value);
  console.log('clicou no botao 2');
  event.preventDefault();
});


