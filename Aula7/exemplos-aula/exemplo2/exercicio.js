// criando uma tag HTML
let createSpan = document.createElement('span');
// adionando conteudo
createSpan.textContent = 'Cristofer Sousa';

// criando uma tag HTML
let createBreakLine = document.createElement('br');

// buscar elemento pai
let buscarElementoPai = document.querySelector('.titleSection');

// inserindo o conteudo
buscarElementoPai.appendChild(createBreakLine);

// inserindo o conteudo
buscarElementoPai.appendChild(createSpan);


