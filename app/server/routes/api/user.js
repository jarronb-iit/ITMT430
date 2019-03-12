const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// const passport = require("passport");

// Load Model
const User = require("../../models/User");

// // Load Validation
// const validatePostInput = require("../../validation/post";

// @route   GET api/user/test
// @desc    Tests user route
// @access  Public
router.get("/test", (req, res) => {
  res.json({
    msg: "User works"
  });
});

// @route   POST api/user/
// @desc    Tests user route
// @access  Private
router.post("/", (req, res) => {
  newUser = new User({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber
  });

  // Hash Password with Bcryptjs
  bcrypt.genSalt(10, (error, salt) => {
    bcrypt.hash(newUser.password, salt, (error, hash) => {
      if (error) throw error;
      newUser.password = hash;
      newUser
        .save()
        .then(user => res.json(user))
        .catch(error => console.log(error));
    });
  });
});

module.exports = router;
