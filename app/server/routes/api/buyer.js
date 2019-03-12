const express = require("express");
const router = express.Router();
// const passport = require("passport");

// Load Model
const Buyer = require("../../models/Buyer");

// // Load Validation
// const validatePostInput = require("../../validation/post");

// @route   GET api/buyer/test
// @desc    Tests buyer route
// @access  Public
router.get("/test", (req, res) => {
  res.json({
    msg: "Buyer works"
  });
});

module.exports = router;
