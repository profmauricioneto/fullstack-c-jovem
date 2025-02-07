const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
let urlEncondedParser = bodyParser.urlencoded({ extended: true });

app.use('/bootstrap', express.static(path.join(__dirname, '..', '..', 'node_modules', 'bootstrap', 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/result', urlEncondedParser, (req, res) => {
    fs.readFile(path.join(__dirname, 'form.html'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao ler o arquivo index.html');
        } else {
            let today = new Date();
            let values = {
                'name': req.body.name,
                'birthyear': req.body.birthyear,
                'age': (today.getFullYear() - parseInt(req.body.birthyear))
            };
            for (var key in values) {
                data = data.toString().replace('{{' + key + '}}', values[key]);
            }
            res.send(data);
        }
    });
});


app.listen(port, () => {
    console.log(`Servidor executando: http://localhost:${port}`);
});
