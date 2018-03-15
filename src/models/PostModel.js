var mongoose = require('mongoose')

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: 'Enter a title'
    },
    author: {
        type: String,
        required: 'Enter a author'
    },
    user: {
        type: String
    },
    content: {
        type: String,
        required: 'Enter a content'
    },
    imgUrl: {
        type: String,
        required: 'Enter an URL'
    },
    category: {
        type: String,
        required: 'Enter an category'
    },
    address: {
        type: String
    },
    lat: {
        type: String
    },
    lng: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema)
