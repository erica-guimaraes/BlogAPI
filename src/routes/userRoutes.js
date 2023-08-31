const userRouter = require('express').Router();
const { usersController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

userRouter.post('/', usersController.createUser);
userRouter.get('/', validateToken, usersController.getAllUsers);
userRouter.get('/:id', validateToken, usersController.getUserId);

module.exports = userRouter;