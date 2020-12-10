O comportamento padrão de um form, quando clicamos em um button ou em um input submit, que está dentro dele, é enviar os dados e recarregar a página. Por isso, a página de Jéssica sempre recarrega quando o usuário clica no botão.

Para evitarmos este comportamento, devemos chamar a função do Javascript que previne o comportamento padrão de certos elementos: event.preventDefault.

Adicionaremos event.preventDefault dentro da função anônima chamada pelo evento click da função:

```js
botao.addEventListener("click", function(event){
    event.preventDefault();

    console.log(form.tarefa.value);
    //Código para adicionar na lista de tarefas
});
```

Observe que passamos event como parâmetro da função. Com isso, incluímos um parâmetro que está sempre presente nas funções executadas quando ocorre um evento.

```
Como nem sempre event é usado, às vezes, é desnecessário passá-lo para a função. Mas neste caso, é ele quem contém a função .preventDefault(), na qual estamos interessados, logo, precisaremos passá-lo como parâmetro.
```

Um detalhe interessante é que em certos navegadores, mesmo sem receber o event como parâmetro, a função event.preventDefault() continua funcionando. Isto é uma peculiaridade de certos navegadores modernos, e pode ser que navegadores mais antigos funcionem de forma diferente.

Se nosso objetivo é escrever um código seguindo as boas práticas do mercado, devemos sempre usar event como parâmetro e as funções que são chamadas pelos eventos.


## Criando elementos com HTML

> A função responsável por criar elementos no Javascript é a createElement().Com ela passamos o nome da tag que queremos criar e ela nos retorna um objeto HTML que pode ser alterado com as propriedades do Javascript, como a .textContent e a .classList.

```html

<div>
    <h1 class="titulo"> Mirror Fashion </h1>
    <p> Uma loja de roupa fantástica</p>
</div>
```

```js

const div = document.createElement("div");
const h1 = document.createElement("h1");
h1.classList.add("titulo");
h1.textContent = "Mirror Fashion";

const p = document.createElement("p");
p.textContent = "Uma loja de roupa fantástica";

div.appendChild(h1);
div.appendChild(p);

```

## FLAT, LIFT e Boas Práticas

Quando temos arquivos separados, cada arquivo possui uma responsabilidade e uma ou mais funções que fazem sentido naquela responsabilidade. Por exemplo, podemos ter um arquivo chamado conversao.js e nele termos funções que convertem valores monetários com R$ para números, e números para o formato com R$. Além disso, se separamos outras funcionalidades por arquivo, quando alterarmos esses arquivos, se cometermos algum erro, apenas uma ou mais funções do arquivo serão comprometidas e o restante dos outros arquivos poderão ser carregados sem problema (a não ser que um arquivo dependa do outro).

Por fim, assim como na vida real geralmente guardamos peças de roupas por categorizações que julgamos satisfazerem nossa organização, separar arquivos por grupos comuns também nos ajuda a encontrar e dar manutenção em nosso código.