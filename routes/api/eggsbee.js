
const express = require('express');
const router = express.Router();

const Eggsbee = require('../../models/Eggsbee');

router.get('/test', (req, res) => res.send('Eggsbee route testing!'));
router.get('/', (req, res) => {
  Eggsbee.find()
    .then(eggsbee => res.json(eggsbee))
    .catch(err => res.status(404).json({ noeggsbeesfound: 'No eggsbee found' }));
});


router.get('/:id', (req, res) => {
  Eggsbee.findById(req.params.id)
    .then(eggsbee => res.json(eggsbee))
    .catch(err => res.status(404).json({ noeggsbeefound: `${req.param.id} EggsbeeId not found` }));
});


router.post('/', (req, res) => {
  Eggsbee.create(req.body)
  .then(eggsbee => res.json({ msg: 'Eggsbee added successfully' }))
  .catch(err => res.status(400).json({ error: 'Unable to add this Eggsbee' }));
});

// update order
router.put('/:id', (req, res) => {
    Eggsbee.findByIdAndUpdate(req.params.id, req.body)
      .then(eggsbee => res.json({ msg: `${eggsbee._id} Updated successfully` }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });
  
  // delete order
  router.delete('/:id', (req, res) => {
    Eggsbee.findByIdAndRemove(req.params.id, req.body)
      .then(eggsbee => res.json({ mgs: `Order ${eggsbee._id} deleted successfully` }))
      .catch(err => res.status(404).json({ error: 'No such order' }));
  });
module.exports = router;