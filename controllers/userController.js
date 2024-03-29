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

module.exports.deleteUser = async (req, res, next) => {
  const { userId } = req.params;

  const deletedUser = await User.delete(+userId);

  res.send(deletedUser);
}

module.exports.updateUser = async (req, res, next) => {
  const {params: {userId}, body} = req;

  const updatedUser = await User.update(+userId, body);

  res.send(updatedUser);
}