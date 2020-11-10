const banda = {
  id: 1,
  nome: 'Santana',
  integrantes: 6,
  localizacao: {
    rua: 'Rua Carlos Maia',
    numero: 99,
    bairro: 'América',
    cidade: 'Joinville',
    estado: 'SC',
    },
};

function digaSeuNome(name) {
  if(name) {
    console.log(`Meu nome é ${name}`);
  } else {
    console.log('O nome não foi informado!');
  }
}

// digaSeuNome('Misael');
// digaSeuNome();

function digaSeuNome2(name2) {
   return name2 ? `${name2}` : 'O nome não foi informado!';
}

//  digaSeuNome2('Victor');
//  digaSeuNome2();
 
 
function ehPar(numero) {
   // usando o ternário
   // usando o if comum
}
 
 // function verifica se Par 
// se o resto da divisão for 0 é par
// senão é impar 

 
 
 // 4 % 2 = 0 
 // 5 % 2 = 1
 // 8 % 2 = 4  % 2 / 0
 
 
//  function ehPar(numero) {
//    if(numero % 2 === 0) {
//      console.log('O número é par');
//    } else {
//      console.log('O número é impar');
//    }
//  }
 
//  ehPar(10);
//  ehPar(3);
 
 
 function ehParTernario(numero) {
   return numero % 2 === 0 ? 'É Par' : 'É impar';
 }
 
 ehParTernario(10);
 ehParTernario(3);
 
 //  função em seta ou arrow functions 
 
 
 // função nomeada
 function sayHello() {}
 
 // função anônima 
 const digaSeuNome3 = function(name) {
  console.log(name);
 };
 
 digaSeuNome3('Carlos');
 

 
 const xpto = numero => numero % 2 === 0 ? 'É Par' : 'É impar';
 xpto(10);
 
 
function tipoDeAnimal(animal) {
   if(animal === 'dog') {
     console.log('auauau')
   } else {
    console.log('miau');
   }
 }
 
 // tipoDeAnimal('dog');
 // tipoDeAnimal('cat');
 
 
 const setTypeAnimal = (animal) => {
   if(!animal) {
    return 'Animal não identificado';
   }
   return animal === 'dog' ? sayDog() : sayCat();
 }
 
 
 const sayDog = () => {
   console.log('Qual é a raça do seu cachorro?');
 }
 
 const sayCat = () => {
   console.log('Qual  é a raça do seu gato?');
 }
 
 
setTypeAnimal('dog')
setTypeAnimal('cat')
setTypeAnimal();

 
 
 const calcularArea = (base, altura) => {
    return base * altura / 2;
 }
 
 // calcularArea(10, 3);
 
 
 
 function calcularArea2(base, altura) {
   return base * altura / 2;
 }
 // calcularArea2(10, 3);
 
 function facaAlgo(area, altura) {
    calcularArea2(area, altura);
 }
 
const realizarSoma = (elemento1, elemento2) => {
  return function(elemento3) {
    return elemento1 + elemento2 + elemento3;
  }
} 

// realizarSoma(2,2)(4);
 
 // facaAlgo(10,3);
 
 
 // Criar uma arrow function da qual eu passo tipo de animal e me retorna o som 
 
 // cachorro - > auau
 // gato = > miau 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

