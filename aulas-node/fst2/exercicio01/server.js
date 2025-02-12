const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const { url } = require('inspector');

const app = express();
const PORT = 3000;
const urlEnconded = bodyParser.urlencoded({ extended: true });

app.use('/bootstrap', express.static(path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/resultado', urlEnconded, (req, res) => {
    fs.readFile(path.join(__dirname, 'resultado.html'), (error, data) => {
        if (error) {
            res.status(500).send('Error no carregamento do arquivo.')
        } else {
            let currentYear = new Date().getFullYear();
            let values = {
                'nome': req.body.nome,
                'anoNascimento': req.body.anoNascimento,
                'idade': (currentYear - parseInt(req.body.anoNascimento))
            }
            for (let key in values) {
                data = data.toString().replace("{{" + key + "}}", values[key])
            }
            res.send(data);
        }
    })
})

app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${3000}`);
})