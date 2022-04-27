
const express = require('express');
const router = express.Router();
const Shop = require('../../models/Shop');


router.get('/shop', (req, res) => res.send('Shop route testing!'));


router.get('/', (req, res) => {
  Shop.find()
    .then(shops => res.json(shops))
    .catch(err => res.status(404).json({ noshopsfound: 'No items in shop found' }));
});


router.get('/:id', (req, res) => {
  Shop.findById(req.params.id)
    .then(shop => res.json(order))
    .catch(err => res.status(404).json({ noshopfound: `Item ${req.params.id} not in shop` }));
});

//add new item to shop
router.post('/', (req, res) => {
  Shop.create(req.body)
  .then(user => res.json({ msg: 'Order added successfully' }))
  .catch(err => res.status(400).json({ error: 'Unable to add this order' }));
});

// update item in shop
router.put('/:id', (req, res) => {
  Shop.findByIdAndUpdate(req.params.id, req.body)
    .then(shop => res.json({ msg: `Item ${shop._id} updated successfully` }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// delete item
router.delete('/:id', (req, res) => {
  Shop.findByIdAndRemove(req.params.id, req.body)
    .then(shop => res.json({ mgs: `${shop.ItemName} deleted from shop successfully` }))
    .catch(err => res.status(404).json({ error: 'No such item in shop' }));
});

module.exports = router;