const mongoose = require('mongoose');

const HelpSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{ 
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true 
    },
    discorporation:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("helpcenter", HelpSchema);