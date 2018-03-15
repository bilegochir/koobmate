var mongoose = require('mongoose')

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    user: {
        type: String,
    },
    book: {
        type: String,
    },
    content: {
        type: String,
        required: 'Enter a content'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', MessageSchema)
