const express = require("express");
const confirmUser = require("../controllers/confirmUser");
const forgotPassword = require("../controllers/forgotPassword");
const inquiry = require("../controllers/inqiry");
const login = require("../controllers/login");
const register = require("../controllers/register");
const resetPassword = require("../controllers/resetPassword");
const subscribe = require("../controllers/subscribe");
const verifyUser = require("../controllers/verifyUser");
const router = express.Router();


router.route("/register").post(register)

router.route("/verify-user/:id").post(verifyUser)

router.route("/login").post(login)

router.route("/forgot-password").post(forgotPassword)

router.route("/confirm-user/:id").post(confirmUser)

router.route("/reset-password").post(resetPassword)

router.route("/inquire").post(inquiry)

router.route("/subscribe").post(subscribe)


module.exports = router;

