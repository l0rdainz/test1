
const express = require('express');
const router = express.Router();

const Eggsbee = require('../../models/Eggsbee'); //import schema here

router.get('/test', (req, res) => res.send('Eggsbee route testing!')); //remove this in prod
router.get('/owneremail', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  Eggsbee.find({OwnerEmail:`${req.query.email}`}) //search database and filter by OwnerEmail
    .then(eggsbee => res.json(eggsbee))
    .catch(err => res.status(404).json({ norecipefound: `Email ${req.query.email} not found` }));
});
router.get('/', (req, res) => {
  Eggsbee.find()
    .then(eggsbee => res.json(eggsbee))
    .catch(err => res.status(404).json({ noeggsbeesfound: 'No eggsbee found' }));
});
//fetch all 

router.get('/:id', (req, res) => {
  Eggsbee.findById(req.params.id)
    .then(eggsbee => res.json(eggsbee))
    .catch(err => res.status(404).json({ noeggsbeefound: `${req.param.id} EggsbeeId not found` }));
});
//fetch by id

router.post('/', (req, res) => { //create new eggsbee
  Eggsbee.create(req.body)
  .then(eggsbee => res.json({ msg: 'Eggsbee added successfully' }))
  .catch(err => res.status(400).json({ error: 'Unable to add this Eggsbee' }));
});

// update eggsbee
router.put('/:id', (req, res) => {
    Eggsbee.findByIdAndUpdate(req.params.id, req.body)
      .then(eggsbee => res.json({ msg: `${eggsbee._id} Updated successfully` }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });
  
  // delete eggsbee
  router.delete('/:id', (req, res) => {
    Eggsbee.findByIdAndRemove(req.params.id, req.body)
      .then(eggsbee => res.json({ mgs: `Order ${eggsbee._id} deleted successfully` }))
      .catch(err => res.status(404).json({ error: 'No such order' }));
  });
module.exports = router;