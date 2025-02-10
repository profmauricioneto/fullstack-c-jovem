const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

let urlEnconded = bodyParser.urlencoded({ extended: true });
app.use('/bootstrap', express.static(path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist')));

// enviando o index.html na rota raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// rota da resposta
app.post('/resultado', urlEnconded, (req, res) => {
    fs.readFile(path.join(__dirname, 'resultado.html'), (error, data) => {
        if (error) {
            res.status(500).send('Error ao carregar o arquivo.')
        } else {
            let currentYear = new Date();
            let valores = {
                'nome': req.body.nome,
                'ano_nascimento': req.body.ano_nascimento,
                'idade': (currentYear.getFullYear() - parseInt(req.body.ano_nascimento))
            };
            console.log(valores);
            for (let key in valores) {
                data = data.toString().replace('{{' + key + '}}', valores[key])
            }
            res.send(data);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}`);
})