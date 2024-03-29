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

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:userId', findUser);
userRouter.delete('/:userId', deleteUser);
userRouter.put('/:userId', updateUser );
userRouter.post('/', validateRegistrationMW, createUser);

router.use('/users',userRouter);

module.exports = router;