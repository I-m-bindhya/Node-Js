const mongoose = require('mongoose');

const studentListSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    rank : {
        type: Number,
        require : true
    },
    status : {
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model('list' , studentListSchema);