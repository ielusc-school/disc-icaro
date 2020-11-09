const country = ['Brazil', 'Canada', 'Italia'];

const like = country.map(function(name) {
  return `I like ${name}!`;
});

console.log(like);


// arrowFunctions


const country = ['Brazil', 'Canada', 'Italia'];

const like2 = country.map((name) => {
  return `I like ${name}!`;
});
console.log(like2);

const like3 = country.map(name => {
  return `I like ${name}!`;
});
console.log(like3);

const like4 = country.map(name =>`I like ${name}!`);
console.log(like4);

const getBrazil = country 
                        .filter(name => name === 'Brazil')
                        .map(name => `I like ${name}`);
console.log(getBrazil);                     



