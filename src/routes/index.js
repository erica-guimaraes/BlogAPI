const router = require('express').Router();
const loginRouter = require('./loginRoutes');

router.use('/login', loginRouter);

module.exports = router;