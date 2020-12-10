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
	const url2 = 'https://marketplace.ifood.com.br/v2/search/catalog-items?latitude=-22.0289985&longitude=-47.8965535&channel=IFOOD&term=pizza&size=100&page=0&merchant_type=RESTAURANT'
  console.log(url2);
  fetch(url2, params)
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