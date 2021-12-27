const mongoose = require("mongoose");

const moodSchema = new mongoose.Schema({
  value: Number,
  moodDate: {
    type: Date,
    default: Date.now
  },
  journal: String
})

const UserSchema = new mongoose.Schema({
  googleid: {
    type: String,
    unique:true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  score: {
    type: Number,
  },
  mood:{
    type:[moodSchema]
  }
});

module.exports = mongoose.model("User", UserSchema);
