let list= [1,2,3];
let listElement = document.querySelector('ul');

function render() {
  let html = '';
  for(let item of list) {
    html += `<li>Item ${item}</li>`;
  }
  listElement.innerHTML = html;
}

render();

