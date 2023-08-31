const { BlogPost, User, Category } = require('../models');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    attributes: { exclude: ['user_id'] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 'SUCCESSFUL', data: posts };
};

module.exports = {
  getAllPosts,
};