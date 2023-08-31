const { postsService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAllPosts = async (_req, res) => {
  const { status, data } = await postsService.getAllPosts();
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  getAllPosts,
};