const userModel = require("../models/userBD");

exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await userModel.createUser(name, email, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(Number(req.params.id));
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};

exports.updateUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await userModel.updateUser(Number(req.params.id), { name, email, password });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await userModel.deleteUser(Number(req.params.id));
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
};

// Funções para tarefas
exports.createTask = async (req, res) => {
    const { title, description, status } = req.body;
    const { userId } = req.params;
    try {
        const task = await userModel.createTask(userId, title, description, status);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create task' });
    }
};

exports.updateTask = async (req, res) => {
    const { title, description, status } = req.body;
    const { userId, id } = req.params;
    try {
        const task = await userModel.updateTask(Number(id), { title, description, status, userId: Number(userId) });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update task' });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await userModel.deleteTask(Number(req.params.id));
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.getUserByEmailAndPassword(email, password);
        if (user) {
            res.json(user);
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
};

exports.getTasksByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const tasks = await userModel.getTasksByUserId(userId);
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
};