let button = document.querySelector('#btnRedirect');
let meuLink = document.querySelector('a');

meuLink.addEventListener('click', function(event) {
  event.preventDefault();
});

button.addEventListener('click', function(event) {
  window.location.href = 'https://cristofersousa.github.io';
});


