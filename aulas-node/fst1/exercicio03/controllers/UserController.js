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