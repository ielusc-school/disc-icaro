## Parâmetros e Retornos são opcionais.

```js
function area(largura, altura) {
   const area =  largura * altura;
   if (area > 20) {
     console.log(`Valor acima do permitido: ${area}m2`);
   } else {
     return area;
   }
}

console.log(area(2,2));
console.log(area(2));
console.log(area(2,3,4,5,6,7));
console.log(area(5,5));
```

## Parâmetros Variáveis
> Arguments é array

```js

function soma() {
  let soma = 0''
  for(i in arguments) {
    soma+= arguments[i];
  }
  return soma
}

console.log(soma());
console.log(soma(3,4,7));

```



## default parameters

Gerando valores padrão:

```js

function soma1(a,b,c,d) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c
}


soma1()
soma 1(3)
soma1(0,0,0);


```



function soma2(a, b, c) {
  a = a !== undefined ? a: 1; // jeito 1
  b = 1 in arguments ? b : 1; // jeito 2
  c = isNaN(c) ? 1 : c; // jeito 3
  return  a+b+c
}

soma2(),
soma2(3);
soma2(1,2,3)
soma2(0,0,0);

// default params es2015

function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}


soma3();
soma3(3);
soma3(1,2,3),
soma(0,0,0)

## Tratamento de Erro (Try/Catch/Throw)
Precisa de um estudo melhor sobre isso...

```js
function setScreamerName({name}) {
  try {
    console.log(name.toUpperCase() + '!!!');
  } catch(e) {
    console.log(e);
    getError(e);
  } finally {
    console.log('final');
  }
}

function getError(erro) {
  throw new Error(`Ops, ocorreu um ${erro} inesperado no sistema`);
}

const person = {
  name: 'Carlos Santos',
  age: 39,
};

setScreamerName(person);

```