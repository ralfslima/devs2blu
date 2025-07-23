/*
    PACOTES/DEPENDÊNCIAS
    - EXPRESS (npm i express);
    - NODEMON (npm i nodemon);
    - CORS (npm i cors);
    - EXPRESS-FILEUPLOAD (npm i express-fileupload).
*/

// Importar o Express
const express = require('express');

// Importar o CORS
const cors = require('cors');

// Importar o Express-Fileupload
const fileupload = require('express-fileupload');

// Importar o Path
const path = require('path');

// Criar um objeto app
const app = express();

// Adicionar o CORS
app.use(cors());

// Adicionar o File-Upload
app.use(fileupload());

// Criar rota para realizar o upload (form-data)
app.post('/', (req, res) => {
    // Obter o arquivo
    const arquivo = req.files.arquivo;

    // Definir caminho do upload e o nome do arquivo
    const destino = path.join(__dirname, 'uploads', arquivo.name);

    // Mover o arquivo
    arquivo.mv(destino);

    // Retorno da API
    res.status(200).json({mensagem:'Upload realizado com sucesso!'});
});

// Servidor
app.listen(8080);