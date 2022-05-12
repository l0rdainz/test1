
const express = require('express');
const router = express.Router();
const Recipe = require('../../models/Recipe');


router.get('/test', (req, res) => res.send('Recipe route testing!'));
router.get('/owneremail', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  Recipe.find({Createdby:`${req.query.email}`})
    .then(recipe => res.json(recipe))
    .catch(err => res.status(404).json({ norecipefound: `Email ${req.query.email} not found` }));
});

router.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(404).json({ norecipesfound: 'No recipes found' }));
});


router.get('/:id', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  Recipe.findById(req.query.id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(404).json({ norecipefound: `RecipeID ${req.query.id} not found` }));
});



//add new recipe
router.post('/', (req, res) => {
  Recipe.create(req.body)
  .then(recipe => res.json({ msg: 'Recipe added successfully' }))
  .catch(err => res.status(400).json({ error: 'Unable to add this recipe '+ err}));
});

// update recipe
router.put('/:id', (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body)
    .then(recipe => res.json({ msg: ` ${recipe._id} Updated successfully` }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// delete recipe
router.delete('/:id', (req, res) => {
  Recipe.findByIdAndRemove(req.query.id)
    .then(recipe => res.json({ mgs: 'Recipe deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such recipe' }));
});

module.exports = router;