const { verifyToken } = require('../utils/token');

const validateToken = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    verifyToken(bearerToken);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;