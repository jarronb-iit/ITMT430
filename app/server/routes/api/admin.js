const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const auth = require('../../middleware/auth');
const errorsFormatter = require('../../helperFunctions/errorsFormatter');

// Load Model
const User = require('../../models/User');

// @route   GET api/admin/test
// @desc    Tests admin route
// @access  Public
router.get('/test', (req, res) => {
  res.json({
    msg: 'Admin works'
  });
});

// @route   GET api/admin/users
// @desc    Get all users
// @access  Private
router.get('/users', auth, (req, res) => {
  let { roles } = req.user;
  let role = roles.find(role => role === 'admin');
  if (role !== 'admin') {
    return res.status(401).json({
      errors: [{ message: 'Not authorized' }]
    });
  }

  User.find({})
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      const errors = errorsFormatter(err);
      return res.status(400).json({ errors: errors });
    });
});
module.exports = router;
