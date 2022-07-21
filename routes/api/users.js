const express = require("express");

const ctrl = require("../../controllers/users");

const { ctrlWrapper } = require("../../helpers");

const { validation, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post(
  "/verify",
  validation(schemas.email),
  ctrlWrapper(ctrl.resendVerify)
);
module.exports = router;
