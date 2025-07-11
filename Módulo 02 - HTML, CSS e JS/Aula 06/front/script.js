// Seleciona todos os elementos HTML que serão utilizados
const formularioEndereco = document.getElementById('formularioEndereco');
const listaEnderecosUL = document.getElementById('listaEnderecosUL');
const cepInput = document.getElementById('cep');
const logradouroInput = document.getElementById('logradouro');
const bairroInput = document.getElementById('bairro');
const cidadeInput = document.getElementById('cidade');
const estadoInput = document.getElementById('estado');
const nomeInput = document.getElementById('nome');
const botaoFormulario = document.getElementById('btn');

// URL da API
const urlApi = 'http://localhost:3000/pessoas';

// Variável para armazenar o id da pessoa (Utilizado para selecionar, alterar e remover)
let enderecoEdicaoId = null;

// Função para buscar dados do ViaCEP
const obterDadosDoCep = (cep) => {
  // Para funcionar o evento BLUR, foi adicionado um retorno no fetch
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(res => res.json())
  .then(dados => dados);
}

// Função para cadastrar um novo endereço
const cadastrarEndereco = (endereco) => {
  // Requisição
  fetch(urlApi, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(endereco),
  })
  .then(res => res.json())
  .then(novoEndereco => {
    exibirEndereco(novoEndereco);
    limparFormulario();
  });
}

// Função para editar um endereço existente
const editarEndereco = (id, nome, cep, logradouro, bairro, cidade, estado) => {
  // Preenche o formulário com os dados do endereço
  nomeInput.value = nome;
  cepInput.value = cep;
  logradouroInput.value = logradouro;
  bairroInput.value = bairro;
  cidadeInput.value = cidade;
  estadoInput.value = estado;

  // Define o ID do endereço que está sendo editado
  enderecoEdicaoId = String(id); // Caso não faça isso, será gerado um novo cadastro

  // Altera o texto do botão para "Alterar Endereço"
  botaoFormulario.textContent = 'Alterar Endereço';
}

// Função para salvar a edição do endereço
const salvarEdicao = () => {
  // Obter o nome e o cep
  const nome = nomeInput.value;
  const cep = cepInput.value;

  // Criar um objeto
  const endereco = {
    nome,
    cep,
    logradouro: logradouroInput.value,
    bairro: bairroInput.value,
    cidade: cidadeInput.value,
    estado: estadoInput.value
  };

  // Requisição
  fetch(`${urlApi}/${enderecoEdicaoId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(endereco),
  })
  .then(res => {
    if (res.ok) {
      carregarEnderecos();
      limparFormulario();
    }
  });
}

// Função para remover um endereço
const removerEndereco = (id) => {
  // O id está sendo passado como string agora
  fetch(`${urlApi}/${id}`, { method: 'DELETE' })
  .then(res => {
    if (res.ok) {
      carregarEnderecos();
    }
  });
}

// Função para listar todos os endereços
const carregarEnderecos = () => {
  // Requisição
  fetch(urlApi)
    .then(res => res.json())
    .then(function(enderecos) {
      listaEnderecosUL.innerHTML = '';
      enderecos.forEach(exibirEndereco);
    });
}

// Função para exibir um endereço na lista
const exibirEndereco = (endereco) => {
  // Criar um objeto de lista <li>
  const li = document.createElement('li');
  
  // Adicionar a classe list-group-item do Bootstrap para estilizar cada elemento
  li.classList.add('list-group-item');

  // Conteúdo do elemento de lista (Segue a ideia do insertRow, insertCell que utilizamos nos conceitos abordados)
  li.innerHTML = `
    <strong>${endereco.nome}</strong><br>
    ${endereco.logradouro}, ${endereco.bairro} - ${endereco.cidade} / ${endereco.estado}<br>
    CEP: ${endereco.cep}
    <button class="btn btn-danger btn-sm float-end" onclick="removerEndereco('${endereco.id}')">Excluir</button>
    <button class="btn btn-warning btn-sm float-end me-2" onclick="editarEndereco('${endereco.id}', '${endereco.nome}', '${endereco.cep}', '${endereco.logradouro}', '${endereco.bairro}', '${endereco.cidade}', '${endereco.estado}')">Editar</button>
  `;

  // Adiciona no elementl <ul> a item de lista <li>
  listaEnderecosUL.appendChild(li);
}

// Função para preencher os dados automaticamente ao inserir o CEP
const tratarAlteracaoCep = () => {

  // Se a quantidade de caracteres no campo CEP for igual a 8, executa a requisição
  if (cep.length === 8) {

    // Requisição
    obterDadosDoCep(cep)
      .then(dadosEndereco => {

        // Se a API não localizar o CEP
        if (dadosEndereco.erro) {
          alert('CEP inválido!');
          return;
        }

        // Preenche os campos com os dados do ViaCEP
        logradouroInput.value = dadosEndereco.logradouro;
        bairroInput.value = dadosEndereco.bairro;
        cidadeInput.value = dadosEndereco.localidade;
        estadoInput.value = dadosEndereco.uf;
      });
  }
}

// Função para limpar o formulário
const limparFormulario = () => {
  nomeInput.value = '';
  cepInput.value = '';
  logradouroInput.value = '';
  bairroInput.value = '';
  cidadeInput.value = '';
  estadoInput.value = '';
  enderecoEdicaoId = null; // Limpa o ID de edição
  botaoFormulario.textContent = 'Cadastrar Endereço'; // Restaura o texto do botão para "Cadastrar"
}

// Quando o cursor desselecionar do input relacionado ao CEP, é executada a função abaixo
cepInput.addEventListener('blur', tratarAlteracaoCep);

// Quando for clicado o botão para cadastrar/alterar
formularioEndereco.addEventListener('submit', function(e) {

  // Faz com que o submit não realize a atualização da página (refresh)
  e.preventDefault();

  // Obter o nome e o cep
  const nome = nomeInput.value;
  const cep = cepInput.value;

  // Valida se os inputs foram preenchidos
  if (!nome || !cep) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Objeto
  const endereco = {
    nome,
    cep,
    logradouro: logradouroInput.value,
    bairro: bairroInput.value,
    cidade: cidadeInput.value,
    estado: estadoInput.value
  };

  // Se o ID do endereço de edição estiver preenchido, chamamos a função de salvar edição (alterar dados)
  if (enderecoEdicaoId) {
    salvarEdicao();
  } else {
    cadastrarEndereco(endereco);
  }
});

// Carregar os endereços ao iniciar
carregarEnderecos();
