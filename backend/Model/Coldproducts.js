const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image:{
        required: true,
        type:String
    },
    tital:{
        required: true,
        type:String
    },
    price:{
        required: true,
        type:String
    },
    pricecut:{
        required: true,
        type:String
    }
})

const coldmodel= mongoose.model("Product", productSchema);

module.exports =coldmodel;