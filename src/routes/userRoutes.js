const userRouter = require('express').Router();
const { usersController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

userRouter.post('/', usersController.createUser);
userRouter.get('/', validateToken, usersController.getAllUsers);

module.exports = userRouter;