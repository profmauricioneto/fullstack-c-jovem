const model = require('../models/task');

exports.createTask = (req, res) => {
    const {title, description, status} = req.body;
    model.createTask(title, description, status);
    res.status(201).json({message: 'task criada com sucesso.'});
};

exports.getAllTasks = (req, res) => {
    res.status(200).json(model.getAllTasks());
};

exports.getTaskById = (req, res) => {
    const { id } = req.params;
    const task = model.getTaskById(Number(id));
    if(task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({message: 'task não encontrada. '})
    }
};

exports.deleteTask = (req, res) => {
    const { id } = req.params;
    model.deleteTask(Number(id));
    res.status(200).json({message: 'task apagada. '});
};

exports.updateTask = (req, res) => {
    const { id } = req.params;
    const {title, description, status} = req.body;
    model.updateTask(Number(id), title, description, status);
    res.status(200).json({message: 'task atualizada!'});
};