const User = require("../models/userModel");
const { transporter, mailOptions } = require("../utils/mailConfig");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(401).json({
      message: "please enter all fields",
    });
  } else {
    try {
      const checkMail = await User.findOne({ email });
      if (checkMail) {
        res.status(401).json({
          message: "Email already exists!",       
        });
      } else {
        const secret = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, secret);
        const newUser = new User({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        });

        const user = await newUser.save();
        const id = user._id;
        const token = jwt.sign({ id }, process.env.JWT_PASS, {
          expiresIn: "30d",
        });

        const mailOption = mailOptions(
          email,
          "Email Verification",
          `<a href=waste-expert-auth.herokuapp.com/${token}>Click here to verify mail<a>`
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
          message: "Register Successfully. please check inbox to verify email",
          token,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = register;
