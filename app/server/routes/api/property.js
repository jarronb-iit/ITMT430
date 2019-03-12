const express = require("express");
const router = express.Router();
// const passport = require("passport");

// Load Model
const Property = require("../../models/Property");

// // Load Validation
// const validatePostInput = require("../../validation/post");

// @route   GET api/user/test
// @desc    Tests user route
// @access  Public
router.get("/test", (req, res) => {
  res.json({
    msg: "Property works"
  });
});

module.exports = router;
