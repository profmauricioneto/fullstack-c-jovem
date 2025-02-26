require('dotenv').config();
const express = require('express');
// const routerTask = require('./routes/taskRoutes');
const routerTaskBD = require('./routes/taskRoutesDB')
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use('/task', routerTaskBD);
// app.use('/user', routerUser);

app.listen(PORT, () => {
    console.log(`Executando o servidor em: http://localhost:${PORT}`);
});
