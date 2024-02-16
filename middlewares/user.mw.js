const { REGISTRATION_SCHEMA } = require('../validation/userSchemas');

module.exports.validateRegistrationMW = async (req, res, next) => {
  try {
    const validatedUser = await REGISTRATION_SCHEMA.validate(req.body);

    req.user = validatedUser;
    next();
  } catch (err) {
    // змушуємо експресс запустити обробник помилок
    next(err.message);
  }
};
