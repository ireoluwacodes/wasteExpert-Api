const User = require("../models/userModel");
const { transporter, mailOptions } = require("../utils/mailConfig");
const jwt = require("jsonwebtoken");

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(401).json({
      message: "Please enter all fields",
    });
  } else {
    try {
      const user = await User.findOne({ email });

      const id = user._id;
      const token = jwt.sign({ id }, process.env.JWT_PASS, {
        expiresIn: "30d",
      });
      const mailOption = mailOptions(
        email,
        "Forgot Password",
        `<a href=waste-expert-auth.herokuapp.com/${token}>Click here to reset password</a>`
      );

      const sendMe = new Promise((resolve, reject) => {
        transporter.sendMail(mailOption, function (error, info) {
          if (error) {
            reject(error);
          } else {
            console.log("Email sent: " + info.response);
            resolve(info);
          }
        });
      });

      await sendMe;

      res.status(200).json({
        message: "Reset link sent to mail",
        token,
      });
    } catch (error) {
      res.status(401).json({
        message: "User does not exist",
      });
    }
  }
};
module.exports = forgotPassword;
