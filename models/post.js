const mongoose = require('mongoose');
const Schema = mongoose.Schema

const postSchema = new mongoose.Schema({
    title: {type: String, required:true},
    author: {type: Schema.Types.ObjectId, ref:'users'},
    content: {type: String, required:true},
    date: {type: Date, default: Date.now},
    post_image: {type: String}
});

module.exports = mongoose.model('post', postSchema)