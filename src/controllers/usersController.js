const jwt = require('jsonwebtoken');
const { usersService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createToken = (payload) => {
  const secret = process.env.JWT_SECRET;
  const options = {
    expiresIn: '8h',
    algorithm: 'HS256',
  };
  return jwt.sign(payload, secret, options);
};

const login = async (req, res) => {
  const token = createToken(req.user);
  res.status(200).json({ token });
};

const createUser = async (req, res) => {
  const user = req.body;
  const { status, data } = await usersService.createUser(user);
  if (status === 'CREATED') {
    const token = createToken(data);
    return res.status(mapStatusHTTP(status)).json({ token });
  }
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  login,
  createUser,
};