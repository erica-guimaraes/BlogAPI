const { userSchema } = require('./schemas/usersSchema');

const userCreateValidate = (user) => {
  const { error } = userSchema.validate(user);
  if (error) {
    return error.message;
  }
};

module.exports = {
  userCreateValidate,
};