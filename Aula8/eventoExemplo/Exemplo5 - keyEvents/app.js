window.addEventListener('keydown', function(e) {
  if(e.key == 'v') {
    console.log('apertou a tecla v')
  } else if(e.key == '2') {
    console.log('clicou no enter');
  }
});

window.addEventListener('keyup', function(e) {
  if(e.key == 'Enter') {
    console.log('clicou no enter');
  }
});