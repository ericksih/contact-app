const express = require('express');
const router = express.Router();

// @route   Get api/auth
// @desc    Get Logged in user
// @access  Private

router.get('/', (req, res) => {
  res.send('Get logged a user');
});

// @route   POST api/auth
// @desc    Auth user & get token
// @access  Private
router.post('/', (req, res) => {
  res.send('login in user');
});

module.exports = router;
