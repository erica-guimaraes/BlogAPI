const userRouter = require('express').Router();
const { usersController } = require('../controllers');

userRouter.post('/', usersController.createUser);

module.exports = userRouter;