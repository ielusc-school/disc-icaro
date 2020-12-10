// function facaAlgo() {
//   let promise = new Promise()
//   return promise;
// }


// function facaAlgo() {
//   let promise = new Promise((resolve, reject) => {
//     resolve('Pedido feito com sucesso');
//   });
//   return promise;
// }

function facaAlgo() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Pedido feito com sucesso, após 3 seg');
    }, 3000);
  });
  return promise;
}

facaAlgo().then((resposta) => {
    console.log(resposta);
});

