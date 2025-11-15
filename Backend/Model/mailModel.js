const mongoose = require('mongoose');

const mailSchema = mongoose.Schema({
    name: {
        type: String,
        required : true ,
    },
    email: {
        type: String,
        required : true ,
    },
    telephone: {
        type: String,
        required : true ,
    },
    message: {
        type: String,
        required : true ,
    },

})

module.exports = mongoose.model('Mail', mailSchema);
