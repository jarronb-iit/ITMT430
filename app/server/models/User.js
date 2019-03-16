const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  typeOfUser: {
    type: String,
    required: true
  },
  typeOfSeller: {
    type: String
  },
  mls: {
    type: String
  },
  roommate: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  preferences: {
    1: {
      type: Boolean,
      default: false
    },
    2: {
      type: Boolean,
      default: false
    },
    3: {
      type: Boolean,
      default: false
    }
  },
  date: { type: Date, default: Date.now }
});

module.exports = User = mongoose.model("user", UserSchema);
