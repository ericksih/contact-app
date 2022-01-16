const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Contact = require('../models/Contact');

// @route   Get api/contacts
// @desc    Get all users contacts
// @access  Private

router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/contacts
// @desc    Add new Contact
// @access  Private
router.post(
  '/',
  auth,
  check('name', 'Name is required').not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   Put api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { name, email, phone, type } = req.body;

  // build contact object
  const contactFields = {}; // empty object to hold the contact fields we want to update in the database
  if (name) contactFields.name = name;
  if (email) contactFields.name = email;
  if (phone) contactFields.name = phone;
  if (type) contactFields.name = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: 'Contact not found' });

    // Make sure owns contacts
    if (contact.user.toString() !== req.user.id) {
      // toString() converts the object to a string and then compares it to the user id in the database (req.user.id)
      return res.status(401).json({ msg: 'Not authorized' });
    }
    contact = await Contact.findByIdAndUpdate(
      // findByIdAndUpdate() is a mongoose method that finds a document by its id and updates it with the new data
      req.params.id,
      { $set: contactFields },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   Delete api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: 'Contact not found' });

    // Make sure owns contacts
    if (contact.user.toString() !== req.user.id) {
      // toString() converts the object to a string and then compares it to the user id in the database (req.user.id)
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Contact.findByIdAndRemove(req.params.id); // remove contact from database by id (req.params.id) and return the deleted contact object to the client (res.json) in JSON format

    res.json({ msg: 'Contact successfully removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
