const Visitor = require("../models/visitorModel");

const inquiry = async (req, res) => {
  const { fullName, email, subject, message } = req.body;
  if (!fullName || !email || !subject || !message) {
    res.status(401).json({
      message: "All fields required",
    });
  } else {
    try {
      const newInquiry = new Visitor({
        fullName,
        email,
        subject,
        message,
      });

      const saved = await newInquiry.save();
      res.status(200).json({
        message: "Sent!",
        payload : saved
      });
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports = inquiry;
