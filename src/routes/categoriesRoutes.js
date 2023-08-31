const categoriesRouter = require('express').Router();
const { categoriesController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');

categoriesRouter.post('/', validateToken, categoriesController.createCategorie);
categoriesRouter.get('/', validateToken, categoriesController.getAllCategories);

module.exports = categoriesRouter;
