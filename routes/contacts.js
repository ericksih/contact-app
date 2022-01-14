const express = require('express');
const router = express.Router();

// @route   Get api/contacts
// @desc    Get all users contacts
// @access  Private

router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route   Get api/contacts
// @desc    Add new Contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add contacts');
});

// @route   Put api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update Contacts');
});

// @route   Delete api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete Contacts');
});

module.exports = router;
