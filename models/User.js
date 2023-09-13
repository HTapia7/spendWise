const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Provide a Username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Provide a Email"],
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: [true, "Provide a password"]
  }
});


const User = model('User', userSchema);

module.exports = User;
