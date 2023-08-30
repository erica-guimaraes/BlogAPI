const jwt = require('jsonwebtoken');

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

module.exports = {
  login,
};