// window.addEventListener('load', function() {
//   alert('Seja bem vindo!');
// });


window.addEventListener('beforeunload', function(e) {
  e.returnValue = null;
  // alert('Antes de fechar, favorite nosso site!');
});