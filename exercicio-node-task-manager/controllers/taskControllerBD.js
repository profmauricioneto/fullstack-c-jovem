const taskModel = require("../models/taskBD");


exports.createTask = async (req, res) => {
    const { title, description, status } = req.body;
    if (!['PENDING', 'IN_PROGRESS', 'COMPLETED'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status value' });
    }
    const task = await taskModel.createTask(title, description, status);
    res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
    const tasks = await taskModel.getTasks();
    res.json(tasks);
};

exports.getTaskById = async (req, res) => {
    const task = await taskModel.getTaskById(req.params.id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
};

exports.updateTask = async (req, res) => {
    const { title, description, status } = req.body;
    if (status && !['PENDING', 'IN_PROGRESS', 'COMPLETED'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status value' });
    }
    const task = await taskModel.updateTask(req.params.id, { title, description, status });
    res.json(task);
};

exports.deleteTask = async (req, res) => {
    const task = await taskModel.deleteTask(req.params.id);
    res.json(task);
};