let input = document.getElementsByTagName('input');

input[0].addEventListener('focus', function() {
  console.log('foco no input');
  input[0].style.border = 'red 1px solid';
});

input[1].addEventListener('blur', function() {
  console.log('perdeu o foco');
  input[1].style.border = '1px solid blue';
});