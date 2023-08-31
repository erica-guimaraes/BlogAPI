const { categoriesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createCategorie = async (req, res) => {
  const { id, name } = req.body;
  const { status, data } = await categoriesService.createCategorie(id, name);
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createCategorie,
};