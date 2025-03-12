const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.getAllUsersController);
router.get('/:id', userController.getUserByIdController);
router.post('/', userController.createUserController);
router.delete('/:id', userController.deleteUserController);
router.put('/:id', userController.updateUserController);

module.exports = router;