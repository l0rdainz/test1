
const express = require('express');
const router = express.Router();
const Exp = require('../../models/Experiment');
//import schema

router.get('/test', (req, res) => res.send('Exp route testing!')); //used for testing, please remove for prod

//fetch all exp
router.get('/', (req, res) => {
  Exp.find()
    .then(exps => res.json(exps))
    .catch(err => res.status(404).json({ noexpsfound: 'No exps found' }));
});

//fetch by id
router.get('/:id', (req, res) => {
  Exp.find({OwnerEmail:`${req.query.email}`,Eggsbeeid:`${req.query.Eggsbeeid}`,Completed:false})
    .then(exp => res.json(exp))
    .catch(err => res.status(404).json({ noexpfound: `${req.param.id} exp not found` }));
});

//add new exp
router.post('/', (req, res) => {
  Exp.create(req.body)
  .then(exp => res.json({ msg: 'exp added successfully' }))
  .catch(err => res.status(400).json({ error: 'Unable to add this exp,'+ err }));
});

// update exp 
router.put('/:id', (req, res) => {
  Exp.update({OwnerEmail:`${req.query.email}`,Eggsbeeiq:`${req.query.Eggsbeeid}`,Completed:false},
  {$push:{
    TimeArray:`${req.body.TimeArray}`,
    Nosereading1:`${req.body.Nosereading1}`,
    Nosereading2:`${req.body.Nosereading2}`,
    Nosereading3:`${req.body.Nosereading3}`,
    Nosereading4:`${req.body.Nosereading4}`,
    Temp:`${req.body.Temp}`,
  }})
    .then(exp => res.json({ msg: `${exp} updated successfully` }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the exp,'+err })
    );
});

// delete exp
router.delete('/:id', (req, res) => {
  Exp.findByIdAndRemove(req.params.id, req.body)
    .then(exp => res.json({ mgs: `Exp ${exp._id} deleted successfully` }))
    .catch(err => res.status(404).json({ error: 'No such exp exist' }));
});

module.exports = router;