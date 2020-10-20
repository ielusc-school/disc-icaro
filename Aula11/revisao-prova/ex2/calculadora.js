/**
 * 
 * 
 * 2. Elabore um script que leia dois números e imprima o resultado das operações aritméticas:
soma, produto, divisão e resto da divisão (%) entre esses números.
Exemplo de tabela que deve ser gerada para as entradas 2 e 1.
 */

 function soma(parametro1, paremetro2) {
   return parametro1 + parametro2;
 }

 soma(2, 2);


 const calculadora = {
   sum: function(params1, params2) {
     return params1 + params2;
   },
   subtracao: function(params1, params2) {
    return params1 - params2;
  },
  divisao: function(params1, params2) {
    return params1 / params2;
  },
  multiplicacao: function(params1, params2) {
    return params1 * params2;
  },
  modulo: function(params1, params2) {
    return params1 % params2;
  }
 }

 calculadora.soma(2,2);



