const subscriber = require("../models/subscriber");

const subscribe = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({
      message: "All fields required",
    });
  } else {
    try {
      const checkUser = await subscriber.findOne({ email });
      if (!checkUser) {

        const newSubscriber = new subscriber({
          email,
        });

        await newSubscriber.save();

        res.status(200).json({
          message: "Subscribed!",
        });
      }
    } catch (error) {
      res.status(401).json({
        message: "Already subscribed!",
      });
    }
  }
};

module.exports = subscribe;
