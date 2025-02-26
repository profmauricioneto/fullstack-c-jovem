const taskModel = require("../models/taskBD");


exports.createTask = async (req, res) => {
    const { title, description, status, userId } = req.body;
    if (!['PENDING', 'IN_PROGRESS', 'COMPLETED'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status value' });
    }
    try {
        const task = await taskModel.createTask(title, description, status, userId);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create task' });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await taskModel.getTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const task = await taskModel.getTaskById(req.params.id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch task' });
    }
};

exports.updateTask = async (req, res) => {
    const { title, description, status } = req.body;
    if (status && !['PENDING', 'IN_PROGRESS', 'COMPLETED'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status value' });
    }
    try {
        const task = await taskModel.updateTask(req.params.id, { title, description, status });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update task' });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await taskModel.deleteTask(req.params.id);
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
};

exports.addTaskToUser = async (req, res) => {
    const { userId, title, description, status } = req.body;
    if (!['PENDING', 'IN_PROGRESS', 'COMPLETED'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }
    try {
      const task = await taskModel.createTask(title, description, status, userId);
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add task to user' });
    }
};