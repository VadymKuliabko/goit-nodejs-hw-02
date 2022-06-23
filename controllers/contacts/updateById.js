const contactsOperations = require("../../models/contacts");
const { createError } = require("../../helpers");

const { schemaUpdate } = require("../../schemas/schemaUpdate");

const updateById = async (req, res) => {
  const { error } = schemaUpdate.validate(req.body);
  if (error) {
    throw createError(400, "missing fields");
  }
  const { contactId } = req.params;
  const result = await contactsOperations.updateContact(contactId, req.body);
  if (!result) {
    throw createError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateById;
