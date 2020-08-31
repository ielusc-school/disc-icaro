## JavaScript e DOM - Revisão

Vimos até então nas aulas anteriores o JavaScript como linguagem de programação e sua sintaxe, além de suas inúmeras possibilidades.

Se for resumir podemos dizer que JavaScript se trata: 
 - Linguagem de Programação
 - Sua tipagem Dinâmica 
 - Lida com Objetos então podemos comumente adotar __prototypes__
 - Vimos há respeito de seus tipos de dados. 
 - E que para tudo ela trata como *functions*

Na aula passada vimos há respeito de `DOM` e como podemos manipular os elementos do HTML, interagir, inserir e remover, essa aula será um reforço extra para deixarmos isso mais fixo sobre sua abordagem pois faz parte do nosso cotidiano, como desenvolvedores web.

## Web

## 1.Protocolos

> o que é protocolo?

## 2.HTTP

O HTTP (Hyper Text Transfer Protocol), o protocolo de tranferência de hypertexto se trata de um protocolo que serve para que possamos solicitar
arquivos, imagens, videos e entre outros. Nosso acesso há websites, portais se dá graças a esse protocolo.

Além do HTTP, também temos o SMTP, TCP e diversos outros protocolos:

 - SMTP: protocolos  para enviar e-mail;
 - TCP: protocolo de transferência 


Um protocolo é uma forma de comunicação entre computadores através da rede;

## 3.URL

Quando fazemos uma solicitação no navegador, inserimos uma URL ao fazermos isso, o navegador fica responsável por carregar os arquivos que estão armazenados no servidor e exibir nessa (URL) Uniform Resouce Locator.

Vamos pegar esse exemplo de URL, `http://www.meusite.com.br/index.html`

Para compreendermos mais profundamente á respeito de URL, devemos saber que ela se divide em três partes:

- Protocolo: `http`
- Servidor: `www.meusite.com.br`
- Arquivos: `index.html`


## 4.HTML

Vimos no semestre passado que basicamente HTML(HyperText Marktup Language), se trata da nossa linguagem de marcação, responsável pelos textos e elementos que vemos na tela ao acessar uma página web;

As tags do HTML criam: Títulos, parágrafos, imagens, listas e etc.
Vimos que tags são definidas por `<p></p>`, algumas não precisam de fechamento como  a tag img `<img src="../seupath/imagem.png">`.


## 4.1HTML e o JS

Como visto na aula anterior podemos adicionar scripts JavasSript em nossos arquivos *html* através da tag `<script>`;

```html

<html>
 <head>
 ...
 </head>
 <body>
 ...
 <script>
 function sayHello() {
   console.log('Digá Ola');
 }

 sayHello();

 </script>
 </body>
</html>

```

Outra forma de fazemos a inserção de JavaScript em nossos arquivos é por meio da chamada de arquivos externos igual fazemos para referenciar arquivos stylesheet.

```html

<html>
 <head>
 ...
  <link rel="text/css" href="../assets/css/meuArquivo.css">
 </head>
 <body>
 ...
 <script src="../assets/js/meuArquivo.js"></script>
 </body>
</html>
```
*OBS:* Sempre que referenciamos um arquivo externo estamos chamando esse arquivo atravbés do protocolo HTTP.


## 4.2HTMl e o DOM

Bem até aqui, vimos, vários conceitos importantes sobre o processo da requisição de uma página web, onde ela fica armarzenada *Servidor*, qual o protocolo *HTTP* responsável por "carregar" nossos arquivos, da qual ele poderá ser apresentado por meio de uma linguagem de marcação *HTML* e como podemos referenciar arquivos *JavaScript*.

Agora iremos nos aprofundar mais á respeito de DOM(Documento Object Model), que conforme vimos na aula anterior é a forma como o JavaScript consegue manipular as informações presente no arquivo HTML. Em outras palavras se pudermos resumir o DOM é o espelho do nosso HTML, ele cria uma cópia idêntica da qual conseguimos manipular e interagir com ele e dessa forma o HTML responde a essas mudanças, já que ele é estático. 



## 4.3 O DOM

Como falado anteriormente se o DOM é uma cópia do HTML, então subentede-se que tudo que tivermos presente na apresenção da nossa *View* iremos conseguir facilmente alterar seja elementos, comportamento visuais que foram inseridos pelo CSS e a parte mais importante do JavaScript que é a criação de *Eventos*.

### 4.3.1 - Árvore do DOM

No caso o nosso documento HTML seria uma árvore completa;

 - A raiz da árvore é o Documento(só uma raiz);
 - Cada elemento da árvore chamamos de node(nó);
 - Conteúdos como texto são chamados de leaf nodes (as folhas);


### 4.3.2 - Interagindo e movendo-se através do DOM

 - Podemos acessar todos os elementos a partir de documento.body;
 - A partir dele vamos entrando nos childNodes;
 - E depois acessando as propriedades que nos interessam;

 ```html

 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM - Aula 7 | Exemplo 1</title>
</head>
<body>
  <header>
    <h1>Logomarca de efeito</h1>
     <p>Slogan com texto bacana para você ficar feliz quando entrar no site</p>
  </header>
  <section>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </section>
  <footer>
    <h2>Nosso rodapé maroto....</h2>
    <a href="#">Voltar para o topo</a>
  </footer>

  <script>
    console.log(document.body); // retorna todo o corpo HTML
    console.log(document.body.childNodes); // nós existentes no meu HTML
    console.log(document.body.childNodes[1]); // checando um nó em específico 
    console.log(document.body.childNodes[1].childNodes); // checando os elementos do nó especifico
    console.log(document.body.childNodes[1].childNodes[1]); // checando o contexto do nó
    console.log(document.body.childNodes[1].childNodes[1].innerText); // checando o valor existente do elemento do nó.\
  </script>
</body>
</html>
 ```


### 4.3.3 - Buscando elementos

Vimos como funciona o árvore do DOM e como podemos nos mover através dos elementos para um determinado elemento mas uma coisa que precisa ser dito é que percorrer o DOM é custoso
e esse custo impacta em performance e tempo de processamento, então sabendo disso precisamos encontrar melhores formas de como buscar elementos.

Já sabemos que o DOM é uma cópia idêntica do HTML, assim como temos tags, ids e classes, o JavaScript nos possibilita utilizar essas características para encontrar o que desejamos.

Como dito anteriormente, já sabemos que o DOM se trata de um objeto sendo assim ele possui alguns metódos que facilitam nossa busca por elementos de forma mais eficaz, como:

- getElementsByTagName
- getElementsById
- getElementsByClassName
- querySelector

#### 4.3.4 GetElementsByTagName - Buscando elementos por tag

> Utilizamos esse método sempre que vamos encontrar elementos através de tag específicas

```js

document.getElementsByTagName('h1');
document.getElementsByTagName('ul');
console.log('quantidade de itens da lista:', document.getElementsByTagName('li').length);
console.log('item 1', document.getElementsByTagName('li')[0]);
console.log('item 2', document.getElementsByTagName('li')[1]);
console.log('item 3', document.getElementsByTagName('li')[2]);

```

#### 4.3.5 GetElementById - Buscando elementos por id

> Utilizamos esse método sempre que vamos encontrar elementos através de id's especifícas.

```js
document.getElementById('seu-Id');
```

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM - Aula 7 | Exemplo 1</title>
</head>
<body>
  <header>
    <h1>Logomarca de efeito</h1>
     <p>Slogan com texto bacana para você ficar feliz quando entrar no site</p>
  </header>
  <section>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <ul id="listItems">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </section>
  <footer>
    <h2>Nosso rodapé maroto....</h2>
    <a href="#">Voltar para o topo</a>
  </footer>

<script> 
  console.log('busca pela tag', document.getElementsByTagName('ul'));
  console.log('quantos ul`s nos temos?', document.getElementsByTagName('ul').length);
  console.log('quero a segunda ul', document.getElementsByTagName('ul')[1]);
 
 // buscando por ID
  console.log('elemento com id', document.getElementById('listItems'));
</script>
</body>
</html>
```

#### 4.3.6 GetElementByClassName - Buscando elementos por class

> Utilizamos esse método sempre que vamos encontrar elementos através de id's especifícas.

```js
document.getElementByClassName('sua-classe');
```

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM - Aula 7 | Exemplo 1</title>
</head>
<body>
  <header>
    <h1>Logomarca de efeito</h1>
     <p>Slogan com texto bacana para você ficar feliz quando entrar no site</p>
  </header>
  <section>
    <ul>
      <li class="list list-blue">Item 1</li>
      <li class="list list-red">Item 2</li>
      <li class="list list-blue">Item 3</li>
    </ul>

    <ul>
      <li class="list list-items">Item 1</li>
      <li class="list list-items">Item 2</li>
      <li class="list list-items">Item 3</li>
    </ul>
  </section>
  <footer>
    <h2>Nosso rodapé maroto....</h2>
    <a href="#">Voltar para o topo</a>
  </footer>

  <script>
    console.log(document.getElementsByClassName('list-items'));
  </script>
</body>
</html>
```

#### 4.3.7 document.querySelector - Buscando elementos por query

Esse método é o nosso coringa ele basicamente oferece o recurso
de buscar elementos através de seus seletores de CSS, assim quando escrevemos:

```css
#list {
  background: #fff;
}

.list-item {
  color: #000;
}
```

Agora podemos usar os mesmo coringas do CSS para fazer uma busca no JavaScript, usando o document.querySelector.

```js
document.querySelector('#alguma-id');
document.querySelector('.alguma-classe');
document.querySelector('ul');
```

### 4.4 Alterando o HTML - insertBefore, appendChild e replaceChild

Agora que já sabemos como buscar por elementos no DOM, agora podemos avançar um pouco mais, podemos `adicionar, remover e modificar`
os elementos da nossa página.

### 4.4.1 insertBefore - Inserindo elementos

 O `insertBefore` insere um nó antes do nó de referência do método, ficou confuso né?

 Pense por etapas:
 
 1. Preciso adicionar um novo elemento HTML.
 2. Esse elemento deverá aparecer onde?
 3. Qual é o elemento que se encontra naquele lugar? Elemento Pai.
 4. Faça uma busca pelo DOM com os métodos de busca que aprendemos.
 5. E agora vamos inserir o nosso elemento. 

 ```html
 <!-- Precisamos adicionar um elemento <p> antes do nosso h1 -->
 <h1> Super title</h1>
 <ul>
   <li> item 1</li>
   <li> item 2</li>
   <li> item 3</li>
</ul>

<script>

</script>
 ```


Como fazemos isso então?

```js

let inserirElemento = document.createElement('p');
inserirElemento.textContent = 'Eu sou um texto'; 
let buscarElemento = document.querySelector('h1');
let pai = buscarElemento.parentNode;

pai.insertBefore(inserirElemento, buscarElemento);
```

### 4.4.2 appendChild - Inserindo elementos

 O `appendChild` insere um nó após todos os elementos do elemento pai especificado.

 ```js

 let inserirElemento = document.createElement('h2');
 let buscarElemento = document.querySelector('h1');

 let pai = buscarElemento.parentNode;
 pai.appendChild(inserirElemento);
 ```


### 4.4.3 replaceChild - Alterando elementos

 O `replaceChild` ele altera um elemento por outro elemento novo

 ```js

 let inserirElemento = document.createElement('h2');
 inserirElemento.textContent= 'James Bond';
 
 let oldElemento = document.querySelector('.title');
 
 let pai = oldElemento.parentNode;
 pai.replaceChild(inserirElemento, oldElemento);
 ```

### 4.4.4 createTextNode - Adicionando nós de texto

Vimos no inicio da aula sobre os Nós, e estamos adicionando conteúdo mas precisamos ver mais á fundo
á respeito.

```js

let texto = document.createTextNode('meu texto maroto');
let p = documento.getElementById('nossoId');
p.appendChild(texto);


```




  







