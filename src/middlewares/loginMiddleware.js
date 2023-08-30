const { usersService } = require('../services');

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await usersService.getUserEmail(email);
  if (!user || !user.password === password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  req.user = {
    id: user.id,
    email: user.email,
    displayName: user.displayName,
    image: user.image,
  };

  next();
};

module.exports = {
  validateLogin,
};