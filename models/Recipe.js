const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  Instruction: {
    type: [String],
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
    type: [Number]
  },
  Createdby: {
    type: String,
    required:true
  },
  Materials: {
    type: [String],
    required: true
  },
  Title:{
    type: String
  },
  Img:{
    type: [String],
    default:["https://via.placeholder.com/150x150"],
    required:true
  },
  Premium:{
    type:Boolean,
    default:false
  }
});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);