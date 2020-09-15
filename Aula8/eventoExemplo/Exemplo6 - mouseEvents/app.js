let button = document.getElementsByTagName('button');


button[0].addEventListener('mousedown', function() {
  console.log('apertei o botão do mouse');
});

button[0].addEventListener('mouseup', function() {
  console.log('soltei o botão do mouse');
});


button[1].addEventListener('dblclick', function() {
  console.log('clicou duas vezes');
});

// pegando o clique do botão direito
button[2].addEventListener('contextmenu', function(e) {
  e.preventDefault();
  console.log('Botão Direito');
});


// mouse move
window.addEventListener('mousemove', function(e) {
  if(e.x == 0 && e.y == 0) {
    console.log('entrei')
    window.alert('Adiciona no favoritos, antes!');
  }
});


// evento scroll
window.addEventListener('scroll', function(e) {
  if(window.pageYOffset > 100) {
    console.log('chegou na posição');
  }
});
