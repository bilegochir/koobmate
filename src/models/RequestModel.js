var mongoose = require('mongoose')

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    book: {
        type: String,
        required: 'Enter a name'
    },
    owner: {
        type: String
    },
    user: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Request', RequestSchema)
