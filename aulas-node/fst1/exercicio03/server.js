require('dotenv').config();
const express = require('express');
const taskRouter = require('./routes/taskRoutes')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/tasks', taskRouter)

// app.get('/', (req, res) => {
//     res.json({message: 'rota principal'})
// });

app.listen(PORT, () => {
    console.log(`Server running in: http://localhost:${PORT}`);
})