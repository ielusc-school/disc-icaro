/*Submeta a lista abaixo pelo ClassRoom.
Copie a lista abaixo e crie um arquivo com o nome:  SeuNomeSobrenome-Atividade1.js

Qual o tipo de dado no JavaScript para textos?
[ ] Text

[ ] bigText

[x] string

Qual o tipo de dado no JavaScript para números?

[ ] int

[x] number

[ ] integer

Um dado true, faz parte de qual tipo de dados em JavaScript?
[ ] positive

[x] boolean

[ ] choice
*/

// Quais são os formatos possivéis aceitos para valores do tipo String? Dê exemplos usando o console.log;

console.log('seu nome');
console.log("seu nome"); // concatenar strings 
console.log('seu nome'+ ' dia da semana' + ' ' + '1999'); 
console.log(`seu nome`); // template literals ${name}

// Quais são os formatos possivéis aceitos para valores do tipo Number? Dê exemplos usando o console.log;
console.log(1);
console.log(1.30);
console.log(-10);

// Escreva três comparações possivéis com Boolean? Dê exemplos usando o console.log.
// Lembre dos operadores de comparação (maior, menor, igual e diferente);

console.log(1 > 2);
console.log( 2 == 2 );
console.log( 2 === '2' );
console.log( 2 !== '2');

// Escreva três comparações possivéis com operadores lógicos? Dê exemplos usando o console.log. Lembre dos operadores de comparação lógicos (AND, OR e NOT);
console.log( 1 > 2 || 2 < 3);
console.log( 1 > 2 && 2 < 3);

// Vimos que existe o tipo NAN, faça 03 exemplos que possamos obter esse retorno, usando o console.log.

console.log( 'banana' + 'banana');
console.log( 'banana' - 'banana');
console.log( 'banana' - 2);