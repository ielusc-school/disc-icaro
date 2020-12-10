// const btnPesquisaCep = document.querySelector('#buttonPesquisa');
const fieldCep = document.querySelector('#js-zipCode');

const showData = (result) => {
  for(const campo in result) {
    console.log(campo) 
    let field = document.querySelector('#'+campo);
    if(field) {
      field.value = result[campo];  
    }
  }
}
const params = {
  method: 'GET',
  mode: 'cors',
  cache: 'default',
};

fieldCep.addEventListener('blur', event => {
  getAddress();
  event.preventDefault();
});

function getAddress() {
  const fieldCep = document.querySelector('#js-zipCode');
  const zipcode = fieldCep.value;
  console.log(zipcode);
   const url = `https://api.postmon.com.br/v1/cep/${zipcode}`;
  // const url = `https://viacep.com.br/ws/${zipcode}/json/`
  console.log(url);
  fetch(url, params)
    .then(response => { 
      response.json()
      .then(data => {
        console.log(data);
        showData(data);
      }) 
    })
    .catch((err) => {
        console.log('error', err);
    });
}