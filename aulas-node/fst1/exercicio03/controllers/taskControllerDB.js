const taskModelDB = require('../models/taskModelDB');

// create-task of controller
async function createTaskController(req, res) {
    const { title, description, status } = req.body;
    if(!['PEDING', 'INPROGRESS', 'COMPLETED'].includes(status)) {
        return res.status(400).json({error: 'Status Inválido!'});
    }
    const task = await taskModelDB.createTask(title, description, status);
    res.status(201).json(task);
};

// buscar todas as tasks
async function getAllTasksController(req, res) {
    const tasks = await taskModelDB.getAllTasks();
    res.json(tasks);
};

// buscar uma task pelo id
async function getTaskByIdController(req, res) {
    const id = req.params.id;
    const task = await taskModelDB.getTaskById(id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({error: 'task não encontrada'});
    }
};

// atualizar os dados pelo id 
async function updateTaskController(req, res) {
    const id = req.params.id;
    const { title, description, status } = req.body;
    if(status && !['PEDING', 'INPROGRESS', 'COMPLETED'].includes(status)) {
        return res.status(400).json({error: 'Status Inválido!'});
    }
    const task = await taskModelDB.updateTask(id, title, description, status);
    res.json(task);
};

// apagar um dado pelo id
async function deleteTaskController(req, res) {
    const id = req.params.id;
    const task = await taskModelDB.deleteTask(id);
    res.json(task);
};

module.exports = {
    createTaskController,
    getAllTasksController,
    getTaskByIdController,
    updateTaskController,
    deleteTaskController,
};