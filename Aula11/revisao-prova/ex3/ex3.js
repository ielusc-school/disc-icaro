let alunos = [
  {id: 1, name: 'Maria',  lista: 2.3, trabalho:5,  prova: 10}, 
  {id: 2, name: 'Ana',  lista: 2, trabalho:  1,  prova: 8},  
  {id: 3, name: 'Carlos', lista: Math.round(1.6), trabalho: 1, prova: 4},
  {id: 4, name: 'Pedro',  lista: 3,  trabalho: 1,  prova: 6},
]

alunos;

for (i = 0; i < alunos.length; i++) {
  let sum = 0;
  let media = 0;
  sum = sum + alunos[i].lista + alunos[i].trabalho + alunos[i].prova;
  media = (media + sum) /2;
  console.log(`${alunos[i].name} | Média ${media}`);
}


function addAluno(nameAluno, notas) {
  if(!nameAluno) {
    console.log('O nome não pode ser nulo');
  } else if(!notas) {
    notes = 0;
    alunos.push({ id: 99, nameAluno, lista: notes, trabalho: notes, prova: notes });
    console.log(`O aluno ${nameAluno} foi inserido no sistema com sucesso`);
  }
}

function removeAluno(id) {
  if(!id) {
    console.log('Ops, não pode ser removido um aluno sem ID');
  } else if(id === alunos.id) {
    // metodo de array
    console.log('Aluno removido com sucesso')
  }
}