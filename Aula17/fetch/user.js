function getUsers() {
  const url = 'https://randomuser.me/api/?results=10&gender=female'
  fetch(url)
    .then(response => { 
      response.json()
      .then(data => console.log(data.results))
    }).catch(error => {
      console.log('error', error);
    });
}

getUsers();