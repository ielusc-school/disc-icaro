// const url ='https://marketplace.ifood.com.br/v2/search/catalog-items?latitude=-22.0289985&longitude=-47.8965535&channel=IFOOD&term=pizza&size=100&page=0&merchant_type=RESTAURANT';

// const url2 = 'https://randomuser.me/api/';
// const url3 = 'https://api.postmon.com.br/v1/cep/13574-033'

    // GET > buscar informações do servidor
    // POST > salvar algumas coisas no servidor
    // PATCH > atualizar alguma coisas no servidor
    // PUT > atualizar alguma coisas no servidor
    // DELETE > remover alguma coisas no servidor

const params = {  // fetch chamando a URL do servidor `API`
  method: 'GET',  // informo qual é o metodo HTTP que devo chamar a API
  mode: 'no-cors', // informar que não tem CORS para o servidor retornar os dados
};

// function getIfood() {
//   fetch(url2, params) // fetch chamando a URL do servidor `API`
//    .then(response => response.json())
//       .then(data => { console.log(data) }) 
//    .catch(error => { console.log(error) });
// }

function chamaEndereco() {
  const url = 'https://api.postmon.com.br/v1/cep/13574-033';
  fetch(url)
    .then(response => {
      response.json()
      .then(data => console.log(data))
    }).catch(error => {
      console.log(error);
    });
}

chamaEndereco();




// function getAddress() {
//   const url = 'https://api.postmon.com.br/v1/cep/13574-033';
//   console.log(url);
//   fetch(url, params)
//     .then(response => { 
//       response.json()
//       .then(data => {
//         console.log(data);
//         showData(data);
//       }) 
//     })
//     .catch((err) => {
//         console.log('error', err);
//     });
// }
// getAddress();


