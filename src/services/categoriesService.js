const { Category } = require('../models');

const createCategorie = async (id, name) => { 
  if (!name) {
    return { status: 'BAD_REQUEST', data: { message: '"name" is required' } };
  }
  return { status: 'CREATED', data: { id, name } };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return { status: 'SUCCESSFUL', data: categories };
};

module.exports = {
  createCategorie,
  getAllCategories,
};