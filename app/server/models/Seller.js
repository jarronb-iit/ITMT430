const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SellerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  typeOfSeller: {
    type: String,
    required: true
  },
  mls: {
    type: String
  },
  date: { type: Date, default: Date.now }
});

module.exports = Seller = mongoose.model("seller", SellerSchema);
