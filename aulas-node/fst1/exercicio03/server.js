require('dotenv').config();
const express = require('express');
const taskRouter = require('./routes/taskRoutes')
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/tasks', taskRouter)

app.listen(PORT, () => {
    console.log(`Server running in: http://localhost:${PORT}`);
})