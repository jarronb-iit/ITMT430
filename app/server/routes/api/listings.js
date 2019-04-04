const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const errorsFormatter = require("../../helperFunctions/errorsFormatter");

// Load Model
const Listing = require("../../models/Listing");

// @route   GET api/listing/test
// @desc    Tests user route
// @access  Public
router.get("/test", (req, res) => {
  res.json({
    msg: "Listing works"
  });
});

// @route   POST api/listing/
// @desc    Create new listing
// @access  Private
router.post("/", auth, (req, res) => {
  // Pull values from req body into Listing Model format
  let newListing = new Listing(req.body);
  newListing.seller = req.user.id;

  Listing.find({ address: newListing.address })
    .then(listing => {
      if (listing.length > 0) {
        throw err;
      }

      // Save new listing to database
      newListing
        .save()
        .then(listing => res.status(200).json(listing))
        .catch(err => {
          if (err.errors) {
            const errors = errorsFormatter(err);
            res.status(409).json({ errors: errors });
          } else {
            console.log(err);
          }
        });
    })
    .catch(err => {
      return res
        .status(409)
        .json({ errors: { message: "Listing with address already exist." } });
    });
});

module.exports = router;
