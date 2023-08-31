const loginRouter = require('express').Router();
const { usersController } = require('../controllers');
const { validateLogin } = require('../middlewares/loginMiddleware');

loginRouter.post('/', validateLogin, usersController.login);

module.exports = loginRouter;