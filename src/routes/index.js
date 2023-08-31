const router = require('express').Router();
const loginRouter = require('./loginRoutes');
const userRouter = require('./userRoutes');

router.use('/login', loginRouter);
router.use('/user', userRouter);

module.exports = router;