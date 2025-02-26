const model = require('../models/taskModelDB');

exports.createTaskController = async (req, res) => {
    const {title, description, status} = req.body;
    if(!['PENDING', 'INPROGRESS', 'COMPLETED'].includes(status)) {
        return res.status(400).json({erro: 'Status Invalido!'});
    }
    const task = await model.createTask(title, description, status);
    res.status(201).json(task);
};

exports.getAllTasksController = async (req, res) => {
    const tasks = await model.getAllTask();
    res.json(tasks);
};

exports.getTaskByIdController = async (req, res) => {
    const id = req.params.id;
    const task = await model.getTaskById(Number(id));
    if(task) {
        res.json(task);
    } else {
        res.status(404).json({error: 'Task não foi encontrada.'});
    }
};

exports.updateTaskController = async (req, res) => {
    const {title, description, status} = req.body;
    const id = Number(req.params.id);
    if(!['PENDING', 'INPROGRESS', 'COMPLETED'].includes(status)) {
        return res.status(400).json({erro: 'Status Invalido!'});
    }
    const taskId = await model.getTaskById(id);
    if (!taskId)  {
        return res.status(404).json({error: 'Task não foi encontrada.'});
    }
    const task = await model.updateTask(id, {title, description, status});
    res.status(200).json(task);
};

exports.deleteTaskController = async (req, res) => {
    const id = Number(req.params.id);
    const taskId = await model.getTaskById(id);
    if (!taskId)  {
        return res.status(404).json({error: 'Task não foi encontrada.'});
    }
    const task = await model.deleteTask(id);
    res.json(task);
};