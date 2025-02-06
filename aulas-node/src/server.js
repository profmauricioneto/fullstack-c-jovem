const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (error, data) => {
        if (!error){
            res.setHeader('Content-Type', 'text/html');
            res.status(200).send(data);
            res.end();
        } else {
            res.status(505).send('Não foi possível carregar a página');
        }
    });
});

// app.get('/', (req, res) => {
//     res.json(
//         {message: "Hello World from Node!"}
//     );
// });

app.listen(port, () => {
    console.log(`Servidor iniciado!`);
    console.log(`Acesso por: http://localhost:${port}`);
});