const mongoose = require('mongoose');

const ExperimentSchema = new mongoose.Schema({
    RecipeId:{
        type:String,
        required: true,
    },
    EggsbeeIds: {
    type: String,
    required: false
  },
  Timestarted: {
    type: Date,
    default: Date.now
  },
  SchemaVersion: {
    type: Number,
    required: true
  },
  Nosereading: {
    type: Map,
  },
  Temp: {
    type: Map,
  },
  Humidity: {
    type: Map
  },
  Pressure: {
    type: Map,
  },
  Sparger:{
      type:Map,
  },
  Completed:{
      type:Boolean
  },
  UserId:{
      type:String,
      required:true,
  },
  SimId:{
      type:String,
  }
});

module.exports = Exp = mongoose.model('Exp', ExperimentSchema);