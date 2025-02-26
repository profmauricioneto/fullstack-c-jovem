const express = require('express');
const taskControllerDB = require('../controllers/taskControllerDB');
const router = express.Router();

router.get('/', taskControllerDB.getAllTasksController);
router.get('/:id', taskControllerDB.getTaskByIdController);
router.post('/', taskControllerDB.createTaskController);
router.delete('/:id', taskControllerDB.deleteTaskController);
router.put('/:id', taskControllerDB.updateTaskController);

module.exports = router;