const { User } = require('../models');
const { userCreateValidate } = require('../validations/userValidate');

const getUserEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createUser = async (user) => {
  const errorMessage = userCreateValidate(user);
  if (errorMessage) {
    return { status: 'BAD_REQUEST', data: { message: errorMessage } };
  }
  const emailExists = await getUserEmail(user.email);
  if (emailExists) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }
  const newUser = await User.create(user);
  const userPassword = {
    id: newUser.id,
    displayName: newUser.displayName,
    email: newUser.email,
    image: newUser.image,
  };
  return { status: 'CREATED', data: userPassword };
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 'SUCCESSFUL', data: users };
};

module.exports = {
  getUserEmail,
  createUser,
  getAllUsers,
};