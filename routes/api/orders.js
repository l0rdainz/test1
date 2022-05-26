
const express = require('express');
const router = express.Router();
const Order = require('../../models/Orders');

//boilerplate api here because orders not yet implemented
router.get('/test', (req, res) => res.send('Order route testing!')); //used for testing


router.get('/', (req, res) => {
  Order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(404).json({ noordersfound: 'No Orders found' }));
});


router.get('/:id', (req, res) => {
  order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(err => res.status(404).json({ noorderfound: `Order ${req.params.id} not found` }));
});

//add new order
router.post('/', (req, res) => {
  Order.create(req.body)
  .then(order => res.json({ msg: 'Order added successfully' }))
  .catch(err => res.status(400).json({ error: 'Unable to add this order' }));
});

// update order
router.put('/:id', (req, res) => {
  Order.findByIdAndUpdate(req.params.id, req.body)
    .then(order => res.json({ msg: `${order._id} Updated successfully` }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// delete order
router.delete('/:id', (req, res) => {
  Order.findByIdAndRemove(req.params.id, req.body)
    .then(order => res.json({ mgs: `Order ${order._id} deleted successfully` }))
    .catch(err => res.status(404).json({ error: 'No such order' }));
});

module.exports = router;