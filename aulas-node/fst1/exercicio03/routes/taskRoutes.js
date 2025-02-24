const express = require('express');
// const taskController = require('../controllers/taskController');
const taskControllerDB = require('../controllers/taskControllerDB');
const router = express.Router();

// router.post('/', taskController.createTask);
// router.get('/', taskController.getAllTasks);
// router.get('/:id', taskController.getTaskById);
// router.put('/:id', taskController.updateTask);
// router.delete('/:id', taskController.deleteTask);

router.post('/', taskControllerDB.createTaskController);
router.get('/', taskControllerDB.getAllTasksController);
router.get('/:id', taskControllerDB.getTaskByIdController);
router.put('/:id', taskControllerDB.updateTaskController);
router.delete('/:id', taskControllerDB.deleteTaskController);

module.exports = router;