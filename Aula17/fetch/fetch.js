const url = 'https://api.postmon.com.br/v1/cep/89218-060';

fetch(url);



const fieldCep = document.querySelector('#js-zipCode');
const zipcode = fieldCep.value;
const url = `https://api.postmon.com.br/v1/cep/${zipcode}`;


const params = {
  method: 'GET',
  mode: 'no-cors',
};

// const params = {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'James',
//     age: 54,
//   })
// };

const btnPesquisaCep = document.querySelector('#buttonPesquisa');

btnPesquisaCep.addEventListener('click', event => {
  event.preventDefault();
  getAddress();
});

function getAddress() {
  fetch(url, params)
  .then(response => response.json())
  .then(data => {
        console.log(data);
  }).catch(() => {
      console.log('error');
  });
}

