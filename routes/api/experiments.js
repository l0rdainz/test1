
const express = require('express');
const router = express.Router();
const Exp = require('../../models/Experiment');


router.get('/test', (req, res) => res.send('Exp route testing!'));


router.get('/', (req, res) => {
  Exp.find()
    .then(exps => res.json(exps))
    .catch(err => res.status(404).json({ noexpsfound: 'No exps found' }));
});


router.get('/:id', (req, res) => {
  Exp.findById(req.params.id)
    .then(exp => res.json(exp))
    .catch(err => res.status(404).json({ noexpfound: `${req.param.id} exp not found` }));
});

//add new exp
router.post('/', (req, res) => {
  Exp.create(req.body)
  .then(exp => res.json({ msg: 'exp added successfully' }))
  .catch(err => res.status(400).json({ error: 'Unable to add this exp' }));
});

// update exp
router.put('/:id', (req, res) => {
  Exp.findByIdAndUpdate(req.params.id, req.body)
    .then(exp => res.json({ msg: `${exp._id} updated successfully` }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the exp' })
    );
});

// delete exp
router.delete('/:id', (req, res) => {
  Exp.findByIdAndRemove(req.params.id, req.body)
    .then(exp => res.json({ mgs: `Exp ${exp._id} deleted successfully` }))
    .catch(err => res.status(404).json({ error: 'No such exp exist' }));
});

module.exports = router;