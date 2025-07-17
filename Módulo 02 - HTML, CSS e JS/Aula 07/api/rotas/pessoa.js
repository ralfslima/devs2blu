// Importando o pacote/dependência do Express
const express = require('express');

// Criando um objeto Router (gerenciar rotas)
const router = express.Router();

// Vetor para armazenar dados pessoas
let vetor = [
    {id:1, nome:'Alice', idade:23},
    {id:2, nome:'Caio',  idade:16}
];

// Id da pessoa
let id = 3;

// Rota para efetuar uma requisição GET
router.get('/', (req, res) => {
    //res.status(201).json({'nome':'Ralf', 'idade':35});
    res.status(200).json(vetor);
});

// Rota para efetuar uma requisição POST
router.post('/', (req, res) => {
    // Obter nome e idade
    //const nome = req.body.nome;
    //const idade = req.body.idade;
    const {nome, idade} = req.body;
    
    // Validar se o nome e a idade foram disponibilizados
    if(!nome || !idade){
        res.status(400).json({mensagem:'O nome e a idade são obrigatórios!'});
    }

    // Criar objeto do tipo pessoa/usuário
    //const obj = {'id':id, 'nome':nome, 'idade':idade};
    const obj = {id, nome, idade}

    // Cadastrar no vetor
    vetor.push(obj);

    // Incrementar o id
    id++;

    // Retorno
    res.status(201).json(obj);
});

// Rota para efetuar uma requisição PUT
router.put('/:idPessoa', (req, res) => {
    // Extrair o idPessoa
    const idPessoa = parseInt(req.params.idPessoa);

    // Verificar se o idPessoa existe no vetor
    const indiceVetor = vetor.findIndex(p => p.id === idPessoa);
    if(indiceVetor === -1){
        res.status(404).json({mensagem:'Pessoa não encontrada'});
    }

    // Extrair nome e idade da requisição
    const {nome, idade} = req.body;
    
    // Validar se o nome e a idade foram disponibilizados
    if(!nome || !idade){
        res.status(400).json({mensagem:'O nome e a idade são obrigatórios!'});
    }

    // Criar objeto com os dados atualizados
    const obj = {'id':idPessoa, nome, idade}

    // Alterar dados no vetor
    vetor[indiceVetor] = obj;

    // Retornar objeto
    res.status(200).json(obj);
});

// Rota para efetuar uma requisição DELETE
router.delete('/:idPessoa', (req, res) => {
    // Extrair o idPessoa
    const idPessoa = parseInt(req.params.idPessoa);

    // Verificar se o idPessoa existe no vetor
    const indiceVetor = vetor.findIndex(p => p.id === idPessoa);
    if(indiceVetor === -1){
        res.status(404).json({mensagem:'Pessoa não encontrada'});
    }

    // Remover dados no vetor
    vetor.splice(indiceVetor, 1);

    // Retornar mensagem informando que a exclusão foi efetuada
    res.status(200).json({mensagem:'Pessoa removida com sucesso'});
});

// Exportar o objeto router
module.exports = router