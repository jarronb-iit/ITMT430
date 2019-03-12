const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
  seller: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  address: {
    street: { type: String, required: true },
    city: {
      type: String,
      required: true
    },
    state: { type: String, required: true },
    zipCode: {
      type: Number,
      required: true
    }
  },
  name: {
    type: String
  },
  price: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  date: { type: Date, default: Date.now }
});

module.exports = Property = mongoose.model("property", PropertySchema);
