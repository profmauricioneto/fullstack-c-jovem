const task = require("../models/taskModel");

exports.createTask = (req, res) => {
  const { title, description, status } = req.body;
  task.create(title, description, status);
  res.status(201).json({ message: "Tarefa criada com sucesso!" });
};

exports.getAllTasks = (req, res) => {
    const tasks = task.getAll();
    res.status(200).json(tasks);
};

exports.getTaskById = (req, res) => {
    const { taskId } = req.params;
    const taskFound = task.getTaskById(Number(taskId));
    if (taskFound) {
        res.status(200).json(taskFound);
    } else {
        res.status(404).json({ message: "Tarefa não encontrada." });
    }
};

exports.updateTask = (req, res) => {
    const { taskId } = req.params;
    const { title, description, status } = req.body;
    task.updateTask(Number(taskId), title, description, status);
    res.status(200).json({ message: "Tarefa atualizada com sucesso!" });
};

exports.deleteTask = (req, res) => {
    const { taskId } = req.params;
    task.deleteTask(Number(taskId));
    res.status(200).json({ message: "Tarefa deletada com sucesso!" });
};