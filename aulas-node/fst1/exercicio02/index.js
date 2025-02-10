const express = require('express');
const app = express();
const PORT = 3000;



app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}`);
})