require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
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

// Middleware para verificar o token JWT
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ error: 'Token não fornecido.' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token inválido.' });
        req.user = user;
        next();
    });
}

app.use('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Acesso autorizado!', user: req.user });
});

app.listen(PORT, () => {
    console.log(`Executando o servidor em: http://localhost:${PORT}`);
});
