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
      if (error) {
        throw error;
      }
      newUser.password = hash;

      // Save New User with Hashed Password
      newUser
        .save()
        .then(user => {
          // Takes password out of user object
          user = {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            dateCreated: user.date
          };

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
          errors = errorFormatter(err);
          res.status(400).json({ error: errors });
        });
    });
  });
});

module.exports = router;

// (firstName:
// { ValidatorError: Path `firstName` is required.
//     at new ValidatorError (C:\Users\baile\Documents\School\ITMT-430\Final\app\server\node_modules\mongoose\lib\error\validator.js:29:11)
//     at validate (C:\Users\baile\Documents\School\ITMT-430\Final\app\server\node_modules\mongoose\lib\schematype.js:930:13)
//     at C:\Users\baile\Documents\School\ITMT-430\Final\app\server\node_modules\mongoose\lib\schematype.js:983:11
//     at Array.forEach (<anonymous>)
//     at SchemaString.SchemaType.doValidate (C:\Users\baile\Documents\School\ITMT-430\Final\app\server\node_modules\mongoose\lib\schematype.js:939:19)
//     at C:\Users\baile\Documents\School\ITMT-430\Final\app\server\node_modules\mongoose\lib\document.js:1936:9
//     at processTicksAndRejections (internal/process/next_tick.js:74:9)
//   message: 'Path `firstName` is required.',
//   name: 'ValidatorError',
//   properties:
//    { validator: [Function],
//      message: 'Path `firstName` is required.',
//      type: 'required',
//      path: 'firstName',
//      value: undefined },
//   kind: 'required',
//   path: 'firstName',
//   value: undefined,
//   reason: undefined,
//   [Symbol(mongoose:validatorError)]: true },
// lastName:
// { ValidatorError: Path `lastName` is required.
//     at new ValidatorError (C:\Users\baile\Documents\School\ITMT-430\Final\app\server\node_modules\mongoose\lib\error\validator.js:29:11)
//     at validate (C:\Users\baile\Documents\School\ITMT-430\Final\app\server\node_modules\mongoose\lib\schematype.js:930:13)
//     at C:\Users\baile\Documents\School\ITMT-430\Final\app\server\node_modules\mongoose\lib\schematype.js:983:11
//     at Array.forEach (<anonymous>)
//     at SchemaString.SchemaType.doValidate (C:\Users\baile\Documents\School\ITMT-430\Final\app\server\node_modules\mongoose\lib\schematype.js:939:19)
//     at C:\Users\baile\Documents\School\ITMT-430\Final\app\server\node_modules\mongoose\lib\document.js:1936:9
//     at processTicksAndRejections (internal/process/next_tick.js:74:9)
//   message: 'Path `lastName` is required.',
//   name: 'ValidatorError',
//   properties:
//    { validator: [Function],
//      message: 'Path `lastName` is required.',
//      type: 'required',
//      path: 'lastName',
//      value: undefined },
//   kind: 'required',
//   path: 'lastName',
//   value: undefined,
//   reason: undefined,
//   [Symbol(mongoose:validatorError)]: true } }
