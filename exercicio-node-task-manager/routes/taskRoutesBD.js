const express = require('express');
const taskController = require('../controllers/taskControllerBD');
const router = express.Router();

router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTaskById);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
router.post('/addTaskToUser', taskController.addTaskToUser); 

module.exports = router;