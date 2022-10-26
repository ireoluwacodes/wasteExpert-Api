const mongoose = require("mongoose");

const subscribeSchema = mongoose.Schema({
  email: {
    type: String,
  },
});

module.exports = mongoose.model("subscriber", subscribeSchema);
