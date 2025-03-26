const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.createUserController = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const user = await userModel.createUser(name, email, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({error: 'Failed to create User.'});
    }
};

exports.getAllUsersController = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({error: 'Failed to get users data.'});
    }
};

exports.getUserByIdController = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userModel.getUserById(Number(id));
        res.json(user);
    } catch (error) {
        res.status(404).json({error: 'User not Found.'});
    }
};

exports.updateUserController = async (req, res) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    try {
        const user = await userModel.updateUser(Number(id), {name, email, password});
        res.json(user);
    } catch (error) {
        res.status(500).json({error: 'Failed to update user.'});
    }
};

exports.deleteUserController = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userModel.deleteUser(Number(id));
        res.json(user);
    } catch (error) {
        res.status(500).json({error: 'Failed to delete user.'});
    }
};

exports.getLoginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.getUserByEmailAndPassword(email, password);
        if (user) {
            const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ user, token });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to login.' });
        console.log(error);
    }
};


// FUNÇÕES PARA MANIPULAÇÃO DAS TASKS
exports.getTasksByUserIdController = async (req, res) => {
    const { userId } = req.params;
    try {
        const tasks = await userModel.getTasksByUserId(Number(userId));
        res.json(tasks);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch tasks.'});
        console.log(error);
    }
};

exports.createTaskController = async (req, res) => {
    const {title, description, status} = req.body;
    const {userId} = req.params;
    try {
        const task = await userModel.createTask(Number(userId), title, description, status);
        res.json(task);
    } catch (error) {
        res.status(500).json({error: 'Failed to create tasks.'});
        console.log(error);
    }
};

exports.updateTaskController = async (req, res) => {
    const {title, description, status} = req.body;
    const {userId, id} = req.params;
    try {
        const task = await userModel.updateTask(Number(id), {title, description, status, userId: Number(userId)});
        res.json(task);
    } catch (error) {
        res.status(500).json({error: 'Failed to update task.'});
        console.log(error);
    }
};

exports.deleteTaskController = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await userModel.deleteTask(Number(id));
        res.json(task);
    } catch (error) {
        res.status(500).json({error: 'Failed to delete task.'});
        console.log(error);
    }
};