const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  Instruction: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required:true
  },
  Private: {
    type: Boolean,
    default:false
  },
  Ratings: {
    type: Number
  },
  Createdby: {
    type: String,
    required:true
  }
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);