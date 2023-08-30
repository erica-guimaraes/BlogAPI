const loginRouter = require('express').Router();
const { userController } = require('../controllers');
const { validateLogin } = require('../middlewares/loginMiddleware');

loginRouter.post('/', validateLogin, userController.login);

module.exports = loginRouter;