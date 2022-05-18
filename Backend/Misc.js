const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const miscSchema = new Schema({
    imgCount: {
        type: Number,
        required: true
    }
}, { timestamps: true});

const Misc = mongoose.model('Misc', miscSchema)
module.exports = Misc; 
