console.log(document.body); // retorna todo o corpo HTML

console.log(document.body.childNodes); // nós existentes no meu HTML

console.log(document.body.childNodes[1]); // checando um nó em específico 
console.log(document.body.childNodes[1].childNodes); // checando os elementos do nó especifico
console.log(document.body.childNodes[1].childNodes[1]); // checando o contexto do nó
console.log(document.body.childNodes[1].childNodes[1].innerText); // checando o valor existente do elemento do nó.

console.log('tagName', document.getElementsByTagName('h1'));
console.log('quantidade de itens da lista:', document.getElementsByTagName('li').length);
console.log('item 1', document.getElementsByTagName('li')[0]);
console.log('item 2', document.getElementsByTagName('li')[1]);
console.log('item 3', document.getElementsByTagName('li')[2]);

