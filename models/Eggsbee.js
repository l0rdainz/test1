const mongoose = require('mongoose');

const EggsbeeSchema = new mongoose.Schema({
    Name:{
        type:String,
    },
    Eggsbeeid:{
        type:String,
    },

    OwnerEmail:{
        type:String,
    }
 
});

module.exports = Eggsbee = mongoose.model('Eggsbee', EggsbeeSchema);