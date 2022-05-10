const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  OwnerEmail: {
    type: String,
    required: true
  },
  Shippingaddr: {
    type: String,
    required: true
  },
  OrderDate: {
    type: Date,
    default: Date.now
  },
  Shipped: {
    type: Boolean
  },
  Items: {
    type: Map,
  },
  
});

module.exports = Order = mongoose.model('order', OrderSchema);