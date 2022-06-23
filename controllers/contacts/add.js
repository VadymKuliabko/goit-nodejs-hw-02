const contactsOperations = require("../../models/contacts");
const { createError } = require("../../helpers");

const { contactShema } = require("../../schemas/contactSchema");

const add = async (req, res) => {
  const { error } = contactShema.validate(req.body);
  if (error) {
    throw createError(400, "missing required name field");
  }
  const result = await contactsOperations.addContact(req.body);
  res.status(201).json(result);
};
module.exports = add;
