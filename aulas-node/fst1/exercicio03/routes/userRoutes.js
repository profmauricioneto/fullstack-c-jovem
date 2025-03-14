const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/', userController.createUserController);
router.get('/', userController.getUsersController);
router.get('/:id', userController.getUserByIdController);
router.put('/:id', userController.updateUserController);
router.delete('/:id', userController.deleteUserController);

module.exports = router;