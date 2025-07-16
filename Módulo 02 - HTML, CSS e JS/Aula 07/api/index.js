// Importar dependência/pacote do Express
const express = require('express');

// Objeto Express (Manipular rotas e o servidor)
const app = express();

// Habilitar receber objeto JSON nas requisições
app.use(express.json());

// Vetor para armazenar dados pessoas
let vetor = [
    {id:1, nome:'Alice', idade:23},
    {id:2, nome:'Caio',  idade:16}
];

// Rota para efetuar uma requisição GET
app.get('/', (req, res) => {
    //res.status(201).json({'nome':'Ralf', 'idade':35});
    res.status(200).json(vetor);
});

// Rota para efetuar uma requisição POST
app.post('/', (req, res) => {
    res.send(req.body);
});

// Servidor
app.listen(3000);
