const userModel = require("../models/userBD");

exports.createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await userModel.createUser(name, email);
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
    const { name, email } = req.body;
    try {
        const user = await userModel.updateUser(Number(req.params.id), { name, email });
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



