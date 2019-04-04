const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const errorFormatter = require("../../helperFunctions/errorsFormatter");

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

// @route   PUT api/user/:id
// @desc    Update user
// @access  Private
router.put('/:id', auth, (req, res) => {
  // Check User param id versus user logged in
  if (req.user.id != req.params.id) {
    return res.status(401).json({
      errors: [{ message: 'Not authorized' }],
  });
  }

  User.findByIdAndUpdate(req.params.id, { $set: req.body }).then((user) =>
    res.status(200).json(user)
  );
  });

  // Hash Password with Bcryptjs
  bcrypt.genSalt(10, (error, salt) => {
    bcrypt.hash(newUser.password, salt, (error, hash) => {
      if (error) {
        throw error;
      }
      newUser.password = hash;

      // Save New User with Hashed Password
      newUser
        .save()
        .then(user => {
          // Takes password out of user object
          const { password, ...formattedUserObj } = user._doc;
          user = formattedUserObj;

          // Create json web token: payload is new user
          jwt.sign(
            user,
            keys.jwtSecret,
            { expiresIn: "3d" },
            (error, token) => {
              // Once jwt is signed, run code
              if (error) throw error;
              res.json({ token: token, user });
            }
          );
        })
        .catch(err => {
          if (err.errors) {
            errors = errorFormatter(err);
            res.status(400).json({ errors: errors });
          } else {
            console.log(err);
          }
        });
    });
  });
});

module.exports = router;
