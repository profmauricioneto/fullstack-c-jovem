require('dotenv').config();
const express = require('express');
// const routerTask = require('./routes/taskRoutes');
// const routerTaskBD = require('./routes/taskRoutesDB');
const routerUser = require('./routes/userRoutes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// app.use('/tasks', routerTaskBD);
app.use('/user', routerUser);

app.listen(PORT, () => {
    console.log(`Executando o servidor em: http://localhost:${PORT}`);
});
