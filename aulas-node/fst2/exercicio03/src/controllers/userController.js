const userModel = require('../models/userModel');

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

// FUNÇÕES PARA MANIPULAÇÃO DAS TASKS