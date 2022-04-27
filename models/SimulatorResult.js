const mongoose = require('mongoose');

const SimresultSchema = new mongoose.Schema({
  UserId: {
    type: String,
    required: true
  },
  RecipeId: {
    type: String,
    required: true
  },
  Prediction: {
    type: String,
    
  },
  Ran: {
    type: Boolean
  },
 
});

module.exports = Simresult = mongoose.model('simresult', SimresultSchema);