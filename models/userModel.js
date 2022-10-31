const mongoose = require("mongoose");
import { isEmail } from 'validator';

const UserSchema = mongoose.Schema({
  isVerified: {
    type: Boolean,
    default: false,
    required : true 
  },
  location: {
    type: String,
    enum: ['Ekiti', 'Ogun', 'Lagos', 'Osun'],
    required : true  
  },
  name: {
    type: String,
    required : true 
  },
  location: {
    type: String,
    required : true 
  },
  email: {
    type: String,
    required : true,
    validate: [isEmail, 'Please fill a valid email address']
  },
  phone: {
    type: String,
    required : false 
  },
  password: {
    type: String,
    required : true 
  },
});

module.exports = mongoose.model("user", UserSchema);
