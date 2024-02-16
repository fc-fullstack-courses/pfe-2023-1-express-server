const express = require('express');
const { validateRegistrationMW } = require('../middlewares/user.mw');
const {
  getUsers,
  createUser,
  findUser,
  deleteUser,
  updateUser,
} = require('../controllers/userController');

// міддлвер для обробки JSON у запитах
// const bodyParserMiddleware = express.json();

// роутер експрессу, містить тіж самі методи маршрутизації що і app
const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:userId', findUser);
router.delete('/users/:userId', deleteUser);
router.put('/users/:userId', updateUser );
router.post('/users', validateRegistrationMW, createUser);

module.exports = router;