const Joi = require("joi");

const schemaUpdate = Joi.object({
  name: Joi.string().min(3).max(20),
  email: Joi.string().email(),
  phone: Joi.string().pattern(/^[0-9]+$/),
}).min(1);

module.exports = {
  schemaUpdate,
};
