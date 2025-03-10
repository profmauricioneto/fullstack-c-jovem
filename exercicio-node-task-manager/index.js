const express = require('express');
const userRoutesDB = require('./routes/userRoutesDB');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/users', userRoutesDB);

app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}`);
});