// URL base da API
const API_URL = 'http://localhost:3000';

// Referências aos elementos da página
const tabela = document.getElementById('tabelaPessoas');
const form = document.getElementById('formPessoa');
const nomeInput = document.getElementById('nome');
const idadeInput = document.getElementById('idade');
const idPessoaInput = document.getElementById('idPessoa');

// Ao carregar a página, chama a função que busca os dados da API
window.onload = listarPessoas;

// Função que busca as pessoas do backend e exibe na tabela
async function listarPessoas() {
    // Requisição
    const resposta = await fetch(API_URL);
    const pessoas = await resposta.json();

    // Limpa o conteúdo anterior da tabela
    tabela.innerHTML = '';  

    // Percorre cada pessoa retornada e cria uma linha na tabela
    pessoas.forEach(p => {
        tabela.innerHTML += `
        <tr>
            <td class="border px-4 py-2">${p.id}</td>
            <td class="border px-4 py-2">${p.nome}</td>
            <td class="border px-4 py-2">${p.idade}</td>
            <td class="border px-4 py-2 text-center space-x-2">
            <!-- Botão para editar -->
            <button onclick="editarPessoa(${p.id}, '${p.nome}', ${p.idade})"
                    class="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded">
                Editar
            </button>
            <!-- Botão para remover -->
            <button onclick="removerPessoa(${p.id})"
                    class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
                Excluir
            </button>
            </td>
        </tr>
        `;
    });
    }

    // Evento de envio do formulário (Cadastrar ou Editar)
    form.addEventListener('submit', async (e) => {
    
    // Impede o recarregamento da página ao enviar o form
    e.preventDefault();

    // Limpar campos
    const nome = nomeInput.value.trim();      
    const idade = idadeInput.value.trim();    
    const id = idPessoaInput.value;            

    // Validação
    if (!nome || !idade) {
        alert("Preencha todos os campos!");
        return;
    }

    // Objeto pessoa a ser enviado
    const pessoa = { nome, idade: Number(idade) };

    if (id) {
        // Se há um ID, fazer atualização (PUT)
        await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pessoa)
        });
    } else {
        // Se não há ID, criar nova pessoa (POST)
        await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pessoa)
        });
    }

    // Limpa o formulário após enviar
    form.reset();
    idPessoaInput.value = ''; // Limpa o campo oculto de ID

    // Atualiza a lista de pessoas
    listarPessoas();
});

// Função chamada ao clicar no botão "Editar"
function editarPessoa(id, nome, idade) {
    // Preenche os campos do formulário com os dados da pessoa
    nomeInput.value = nome;
    idadeInput.value = idade;
    idPessoaInput.value = id;
}

// Função chamada ao clicar no botão "Excluir"
async function removerPessoa(id) {
    // Confirmação simples antes de excluir
    if (confirm("Deseja realmente remover esta pessoa?")) {
        // Requisição DELETE
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        // Atualiza a tabela após remoção
        listarPessoas();
    }
}