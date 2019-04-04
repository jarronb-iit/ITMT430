const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: Number,
      required: true,
    },
  },
  price: {
    type: Number,
    required: true,
  },
  squareFootage: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  amenities: {
    wifi: {
      type: Boolean,
    },
    heating: {
      type: Boolean,
    },
    cooling: {
      type: Boolean,
    },
    washer: {
      type: Boolean,
    },
    indoorFireplace: {
      type: Boolean,
    },
    parkingType: [
      {
        type: String,
      },
    ],
    petsAllowed: [
      {
        type: String,
      },
    ],
  },
  listingType: {
    type: String,
  },
  name: {
    type: String,
  },
  photos: [
    {
      type: String,
    },
  ],
  dateAvailable: {
    type: Date,
  },
  dateListed: {
    type: Date,
    default: Date.now,
  },
});

const Listing = mongoose.model('listing', ListingSchema);
module.exports = Listing;
