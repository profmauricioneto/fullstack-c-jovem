require('dotenv').config();
const express = require('express');
const routerTask = require('./routes/taskRoutes');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use('/task', routerTask);
// app.use('/user', routerUser);

app.listen(PORT, () => {
    console.log(`Executando o servidor em: http://localhost:${PORT}`);
});
