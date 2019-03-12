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
  price: {
    type: String,
    required: true
  },
  squareFootage: {
    type: Number,
    required: true
  },
  bath: {
    type: Number,
    required: true
  },
  propertyType: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  photo: {
    type: String
  },
  date: { type: Date, default: Date.now }
});

module.exports = Property = mongoose.model("property", PropertySchema);
