const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}`);
});