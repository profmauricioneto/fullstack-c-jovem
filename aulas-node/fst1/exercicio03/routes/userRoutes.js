const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// rotas do usuário
router.post('/', userController.createUserController);
router.get('/', userController.getUsersController);
router.get('/:id', userController.getUserByIdController);
router.put('/:id', userController.updateUserController);
router.delete('/:id', userController.deleteUserController);

router.post('/login', userController.loginUser);

// rotas das tasks
router.post('/:userId/tasks', userController.createTaskController);
router.get('/:userId/tasks', userController.getTasksByUserIdController);
router.put('/:userId/tasks/:id', userController.updateTaskController);
router.delete('/:userId/tasks/:id', userController.deleteTaskController);

module.exports = router;