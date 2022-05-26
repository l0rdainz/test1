const mongoose = require('mongoose');

const EggsbeeSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Eggsbeeid:{
        type:String,
        required:true
    },

    OwnerEmail:{
        type:String,
        required:true
    },
    Expid:{
        type:String
    },
    Status:{
        type:String
    }
 
});

module.exports = Eggsbee = mongoose.model('Eggsbee', EggsbeeSchema);