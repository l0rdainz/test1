const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  EggsbeeIds: {
    type: String,
    required: false
  },
  Fullname: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Contact: {
    type: Number,
  },
  Role: {
    type: String,
    default:'User',
    required: true,
  },
  HashedPassword: {
    type: String
  },
  Address: {
    type: String,
  },
  SchemaVersion:{
      type:Number,
      default:1.0
  }
});

module.exports = Book = mongoose.model('user', UserSchema);