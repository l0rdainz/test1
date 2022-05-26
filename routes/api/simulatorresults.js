
const express = require('express');
const router = express.Router();
const Sim = require('../../models/SimulatorResult');

//boilerplate template for simulator because this part is not ready
router.get('/test', (req, res) => res.send('Sim route testing!'));


router.get('/', (req, res) => {
  Sim.find()
    .then(sims => res.json(sims))
    .catch(err => res.status(404).json({ nosimsfound: 'No simulator results found' }));
});


router.get('/:id', (req, res) => {
  Sim.findById(req.params.id)
    .then(sim => res.json(sim))
    .catch(err => res.status(404).json({ nosimfound: `Simulator result ${req.params.id} not found` }));
});

//add new result
router.post('/', (req, res) => {
  Sim.create(req.body)
  .then(sim => res.json({ msg: 'Simulator result added successfully' }))
  .catch(err => res.status(400).json({ error: 'Unable to add this simulator result' }));
});

// update result
router.put('/:id', (req, res) => {
  Sim.findByIdAndUpdate(req.params.id, req.body)
    .then(sim => res.json({ msg: `Simulator result ${sim._id} Updated successfully` }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// delete result
router.delete('/:id', (req, res) => {
  Sim.findByIdAndRemove(req.params.id, req.body)
    .then(sim => res.json({ mgs: `Simulator result ${sim._id} deleted successfully` }))
    .catch(err => res.status(404).json({ error: 'No such results' }));
});

module.exports = router;