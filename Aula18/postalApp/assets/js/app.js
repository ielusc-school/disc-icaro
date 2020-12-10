// const btnPesquisaCep = document.querySelector('#buttonPesquisa');
const fieldCep = document.querySelector('#js-zipcode');

const showData = (result) => {
  for(const campo in result) {
    console.log('campo', campo) 
    let field = document.querySelector('#'+campo);
    console.log('giledl', field);
    if(field) {
      field.value = result[campo];  
    }
  }
  // const form = document.querySelector('#js-form');
  // console.log(form);

  // const address = {
  //   street: result.logradouro,
  //   neighborhood: result.bairro,
  //   city: result.cidade,
  //   state: result.estado,
  //   zipcode: result.cep,
  // };


  //  let street = form.street.value;
  //  street = address.street;

  //  console.log('ashuahsuausahsauhsas', street);


  //  const neighborhood = form.neighborhood.value;
  //  const city = form.city.value;
  //  const state = form.state.value;
  //  const zipcode = form.zipcode.value;
}


fieldCep.addEventListener('blur', event => {
  getAddress();
  event.preventDefault();
});

function getAddress() {
  const fieldCep = document.querySelector('#js-zipcode');
  const zipcode = fieldCep.value;
  const url = `https://api.postmon.com.br/v1/cep/${zipcode}`;
  fetch(url)
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