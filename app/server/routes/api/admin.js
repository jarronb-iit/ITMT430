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
module.exports = router;
