// const { Category } = require('../models');

const createCategorie = async (id, name) => { 
  if (!name) {
    return { status: 'BAD_REQUEST', data: { message: '"name" is required' } };
  }
  return { status: 'CREATED', data: { id, name } };
};

module.exports = {
  createCategorie,
};