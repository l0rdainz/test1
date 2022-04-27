
const express = require('express');
const router = express.Router();
const User = require('../../models/User');


router.get('/test', (req, res) => res.send('User route testing!'));


router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nousersfound: 'No Users found' }));
});


router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ nouserfound: `User ${req.params.id} not found` }));
});

//add new user
router.post('/', (req, res) => {
  User.create(req.body)
  .then(user => res.json({ msg: `${user.Fullname} added successfully` }))
  .catch(err => res.status(400).json({ error: 'Unable to add this user' }));
});

// update user
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.json({ msg: `User ${user._id} updated successfully` }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// delete user
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, req.body)
    .then(user => res.json({ mgs: `${user._id} deleted successfully` }))
    .catch(err => res.status(404).json({ error: 'No such user' }));
});

module.exports = router;