const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.getAllUsersController);
router.get('/:id', userController.getUserByIdController);
router.post('/', userController.createUserController);
router.delete('/:id', userController.deleteUserController);
router.put('/:id', userController.updateUserController);

router.post('/login', userController.getLoginController);

// rotas das tarefas
router.get('/:userId/tasks', userController.getTasksByUserIdController);
router.post('/:userId/tasks', userController.createTaskController);
router.put('/:userId/tasks/:id', userController.updateTaskController);
router.delete('/:userId/tasks/:id', userController.deleteTaskController);

module.exports = router;