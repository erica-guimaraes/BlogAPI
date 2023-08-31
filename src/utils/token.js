const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const createToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });
  return token;
};

const verifyToken = (authorization) => {
  const token = authorization.split(' ')[1];

  jwt.verify(token, JWT_SECRET);
};

module.exports = {
  createToken, 
  verifyToken,
};