console.log('start');

let item2 = document.querySelectorAll('.list-item')[1];
console.log(item2);
let item4 = document.querySelectorAll('.list-item')[4];
console.log(item4);

item4.textContent = 'Misael Santana';
item4.innerHTML = '<h1>Jaimijnho Nonato</h1>';
item4.remove();

let alterarCss = document.querySelectorAll('.list-item')[2].classList.add('turma-2');

let checkClasse = document.querySelectorAll('.list-item')[2].remove('turma-2')

// console.log(alterarCss);

let fieldName = document.querySelector('#js-fieldName').value;

fieldName.value = 'Novo Nome';
console.log(fieldName);

// background-color

document.querySelector('#js-fieldName').style.backgroundColor = 'blue';







