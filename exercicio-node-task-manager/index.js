const express = require('express');
const taskRoutesBD = require('./routes/taskRoutesBD');
const userRoutesDB = require('./routes/userRoutesDB');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/tasks', taskRoutesBD);
app.use('/users', userRoutesDB);

app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}`);
});