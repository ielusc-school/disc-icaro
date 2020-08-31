
// criando meu elemento p
let novoElemento = document.createElement('p');
// inserindo um conteudo para a minha tag p
let texto = document.createTextNode('sou um texto bacana');
// adicionadno o content
novoElemento.appendChild(texto);
// novoElemento.textContent = 'Eu sou um texto'; 

// buscando por elemento da tag h1
let buscarElemento = document.querySelector('h1');

// 
let pai = buscarElemento.parentNode;

// inserindo o elemento antes do h1
pai.insertBefore(novoElemento, buscarElemento);