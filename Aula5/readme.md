## Dados

Conjuntos de dados
Para trabalhar com um pedaço de dados digitais, teremos primeiro que encontrar uma maneira de representá-los na memória de nossa máquina. Dizer, como um exemplo muito simples, que queremos representar uma coleção de números: 2, 3, 5, 7 e 11.

Poderíamos ser criativos com strings - afinal, strings podem ter qualquer comprimento, assim você pode colocar muitos dados nelas - e usar o “2 3 5 7 11” como a nossa representação. Mas isso é estranho. Você teria que, de alguma forma, extrair os dígitos e convertê-los de volta para número para acessá-los.

Felizmente, JavaScript fornece um tipo de dados especificamente para armazenar sequências de valores. Ele é chamado de array, e é escrito como uma lista de valores entre colchetes, separados por vírgulas.

```js
var listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[1]);
// → 3
console.log(listOfNumbers[1 - 1]);
// → 2
```
A notação para a obtenção de elementos dentro de uma matriz também usa colchetes. Um par de colchetes, imediatamente após uma expressão, com uma expressão dentro deles, vai procurar o elemento da expressão à esquerda que corresponde ao índice determinado pela expressão entre colchetes.

O primeiro índice de um array é o zero, e não um. Assim, o primeiro elemento pode ser lido como: listOfNumbers[0]. Se você não tem experiência com a programação, isso pode levar algum tempo para se acostumar. Contagem baseada em zero tem uma longa tradição na tecnologia, e desde que essa convenção é constantemente seguida (o que ela é, em JavaScript), ela funciona muito bem.

--- Trecho retirado do livro | [Eloquente JavaScript](https://braziljs.github.io/eloquente-javascript/chapters/estrutura-de-dados/)

## Arrays

> Resumo:  
O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.

Arrays são objetos semelhantes a listas que vêm com uma série de  métodos embutidos para realizar 
operações de travessia e mutação. Nem o tamanho de um array JavaScript nem os tipos de elementos 
são fixos. Já que  o tamanho de um array pode ser alterado a qualquer momento e os dados podem 
ser armazenados em posições não contíguas, arrays JavaScript não tem a garantia de serem densos; 
isso depende de como o programador escolhe usá-los. 

De uma maneira geral, essas são características convenientes, mas, se esses recursos não são 
desejáveis para o seu caso em particular, você pode considerar usar arrays tipados.

Referência: [Link](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)


## Loops

É muito comum a situação em que se precisa repetir certo trecho de um programa determinado por um número de vezes. Por exemplo, quando é preciso calcular a folha de pagamento de uma empresa, sendo que o mesmo cálculo é efetuado para cada um dos funcionários.

Essas estruturas de repetição são muitas vezes chamadas de `Laços ou de Loops`.

A classificação das estruturas de repetição é feita de acordo com o conhecimento ou não do número de vezes que os comandos serão executados. Então, os laços dividem-se em:

- laços contados: quando se sabe quantas vezes o comando composto deverá ser executado.
- laços condicionais: quando não se sabe o número de vezes que o conjunto de comandos no interior do laço será repetido.

