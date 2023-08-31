const postRouter = require('express').Router();
const { postsController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

postRouter.get('/', validateToken, postsController.getAllPosts);

module.exports = postRouter;