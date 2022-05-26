const mongoose = require('mongoose');

const ExperimentSchema = new mongoose.Schema({
    RecipeId:{
        type:String,
        required: false,
    },
    Eggsbeeid: {
    type: String,
    required: true
  },
  Timestarted: {
    type: Date,
    default: Date.now
  },
  SchemaVersion: {
    type: String,
    default:'V1',
    required: true
  },
  Nosereading1: {
    type: [Number],
  },
  Nosereading2: {
    type: [Number],
  },
  Nosereading3: {
    type: [Number],
  },
  Nosereading4: {
    type: [Number],
  },
  Temp: {
    type: [Number],
  },
  TimeArray:{
    type:[Number]
  },

  Completed:{
      type:Boolean,
      default:false
  },
  OwnerEmail:{
      type:String,
      required:true,
  },
  SimId:{
      type:String,
  }
});

module.exports = Exp = mongoose.model('Exp', ExperimentSchema);