const mongoose = require('mongoose');

const HotproductSchema = mongoose.Schema({
    image:{
        required: true,
        type:String
    },
    tital:{
        required: true,
        type:String
    },
    price:{
        require:true,
        type:String
    },
    pricecut:{
        require:true,
        type:String
    }
})

const hotmodel= mongoose.model("HotProduct", HotproductSchema);

module.exports =hotmodel;