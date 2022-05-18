const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: false
    }
}, { timestamps: true});

const Post = mongoose.model('Post', postSchema)
module.exports = Post;