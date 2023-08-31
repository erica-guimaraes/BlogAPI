const router = require('express').Router();
const loginRouter = require('./loginRoutes');
const userRouter = require('./userRoutes');
const categoriesRouter = require('./categoriesRoutes');
const postRouter = require('./postRoutes');

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoriesRouter);
router.use('/post', postRouter);

module.exports = router;