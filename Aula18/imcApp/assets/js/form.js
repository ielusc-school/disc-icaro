const botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', (event) => {
  // falar sobre o preventDefault()
  event.preventDefault();

  // Extrair informes do form
  const form = document.querySelector('#form-adicionar');
  console.log(form);

  const paciente = obtemPacienteDoFormulario(form);
  console.log(paciente);

  console.log(nome, peso, altura, gordura);


  //criando um elemento html
  const pacienteTr = document.createElement('tr');
  const nomeTd = document.createElement('td');
  const pesoTd = document.createElement('td');
  const alturaTd = document.createElement('td')
  const gorduraTd = document.createElement('td');  
  const imcTd = document.createElement('td')

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = calculaImc(peso,altura);

  pacienteTr.appendChild(nomeTd)
  pacienteTr.appendChild(pesoTd)
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd)
  pacienteTr.appendChild(imcTd)

  // adicionar a TR na tabela

  const tabela = document.querySelector('#tabela-pacientes');
  tabela.appendChild(pacienteTr);
  console.log(pacienteTr);
});


function obtemPacienteDoFormulario(form) {
  const paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}