const express = require("express");
const {
  registerUser,
  authUser,
  verifyUser,
  registerAdmin,
  LoginAdmin,
  verifyAdmin,
  recoverUserEmail,
  resetPassword,
} = require("../Controllers/AuthController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/recover").post(recoverUserEmail);
router.route("/resetPassword").post(resetPassword);
router.route("/registeradmin").post(registerAdmin);
router.route("/login").post(authUser);
router.route("/loginadmin").post(LoginAdmin);
router.route("/:confirmationCode").get(verifyUser);
router.route("/admin/:confirmationCode").get(verifyAdmin);

module.exports = router;
