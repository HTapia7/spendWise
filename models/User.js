import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Provide a Username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Provide a Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Provide a password"]
  }
});


const User = mongoose.models.users || mongoose.model 
("users", userSchema)

export default User