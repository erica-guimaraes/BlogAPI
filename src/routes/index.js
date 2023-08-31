const router = require('express').Router();
const loginRouter = require('./loginRoutes');
const userRouter = require('./userRoutes');
const categoriesRouter = require('./categoriesRoutes');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoriesRouter);

module.exports = router;