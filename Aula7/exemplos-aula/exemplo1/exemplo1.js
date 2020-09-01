// BUSCA por Tags

// let elementoHeader = document.getElementsByTagName('header');
// // console.log(elementoHeader);

// elementoHeader.secao1.childNodes[1].textContent = 'Outro Titulo';

// let elementoTitle = document.getElementsByTagName('h1');

// console.log(elementoTitle);


// console.log(elementoTitle[0].innerText);
// elementoTitle[0].innerText = 'Novo Algo';



// busca por ID

let buscaId = document.getElementById('title');
console.log(buscaId);

// busca por class

let findItems = document.getElementsByClassName('item'); 
console.log(findItems);


//  busca por query elements

let buscaPorId = document.querySelector('#nameList');
console.log(buscaPorId);

// ultimo elemento
buscaPorId.lastElementChild


let buscaPorClasse = document.querySelector('.nameList');
console.log(buscaPorClasse.length);


// inserir elemento
let inserirElemento = document.createElement('h2');

inserirElemento.textContent = 'James';

let findElemento = document.querySelector('#title');
console.log(findElemento);

let elemento1 = findElemento.parentNode;

elemento1.insertBefore(inserirElemento, findElemento);




// 





