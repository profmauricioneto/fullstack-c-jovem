const express = require('express');
const userController = require('../controllers/userControllerDB');
const router = express.Router();

// Rotas para usuários
router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// Rota de login
router.post('/login', userController.loginUser);

// Rotas para tarefas
router.post('/:userId/tasks', userController.createTask);
router.get('/:userId/tasks', userController.getTasksByUserId); // Adicionada rota para buscar tarefas
router.put('/:userId/tasks/:id', userController.updateTask);
router.delete('/:userId/tasks/:id', userController.deleteTask);

module.exports = router;