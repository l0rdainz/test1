const mongoose = require('mongoose');

const EggsbeeSchema = new mongoose.Schema({
    Name:{
        type:String,
    }
 
});

module.exports = Eggsbee = mongoose.model('Eggsbee', EggsbeeSchema);