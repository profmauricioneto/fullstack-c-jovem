const userModel = require('../models/userModel');

exports.createUserController = async(req, res) => {
    const {name, email, password} = req.body;
    try {
        const user = await userModel.createUser(name, email, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({error:'Failed to create a new User'});
    }
};

exports.getUsersController = async(req, res) => {
    try {
        const users = await userModel.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({error:'Failed to recover users'});
    }
};

exports.getUserByIdController = async(req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.getUserById(Number(id));
        res.json(user);
    } catch (error) {
        res.status(404).json({error:'Failed to recover user data'});
    }
};

exports.updateUserController = async(req, res) => {
    try {
        const {name, email, password} = req.body;
        const id = req.params.id;
        const user = await userModel.updateUser(Number(id), {name, email, password});
        res.json(user);
    } catch (error) {
        res.status(500).json({error:'Failed to update user data'});
    }
};

exports.deleteUserController = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.deleteUser(Number(id));
        res.json(user);
    } catch (error) {
        res.status(404).json({error:'User not Found.'});
    }
};

exports.loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel.getUserByEmailAndPassword(email, password);
        if (user) {
            console.log('Login com Sucesso.');
            res.json(user);
        } else {
            res.status(401).json({error: 'Email or Password Invalid'});
        }
    } catch (error) {
        res.status(404).json({error: 'Failed to Login.'});
    }
};

exports.createTaskController = async (req, res) => {
    const { title, description, status } = req.body;
    const {userId, id} = req.params;
    try {
        const task = await userModel.createTask(Number(id), {title, description, status, userId: Number(userId)});
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({error: 'Failed to create task.'});
    }
};

exports.getTasksByUserIdController = async (req, res) => {
    const { userId } = req.params;
    try {
        const tasks = await userModel.getTasksByUserId(Number(userId));
        res.json(tasks);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch tasks.'});
    }
};

exports.updateTaskController = async (req, res) => {
    const { title, description, status } = req.body;
    const { userId, id } = req.params; 
    try {
        const task = await userModel.updateTask(Number(id), {title, description, status, userId: Number(userId)});
        res.json(task);
    } catch (error) {
        res.status(500).json({error: 'Failed to update tasks.'});
    }
};

exports.deleteTaskController = async (req, res) => {
    const { id } = req.params.id;
    try {
        const task = await userModel.deleteTask(Number(id));
        return task;
    } catch (error) {
        res.status(500).json({error: 'Failed to delete tasks.'});
    }
};