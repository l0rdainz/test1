const mongoose = require('mongoose');

const ShopSchema = new mongoose.Schema({
  ItemName: {
    type: String,
    required: true
  },
  Qtyleft: {
    type: Number,
    required: true
  }
  
});

module.exports = Shop = mongoose.model('shop', ShopSchema);