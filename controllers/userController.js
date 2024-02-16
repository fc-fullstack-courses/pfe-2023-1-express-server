const User = require('../models/User');

module.exports.getUsers = async (request, response) => {
  const users = await User.findAll();

  response.send(users);
};

module.exports.createUser = async (req, res, next) => {

  const newUser = await User.create(req.user);

  res.send(newUser);
};

module.exports.findUser = async (req, res, next) => {
  const { userId } = req.params;

  const user = await User.findOne(+userId);

  res.send(user);
}