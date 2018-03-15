var mongoose = require('mongoose')

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: 'Enter a name'
    },
    description: {
        type: String,
        required: 'Enter a category'
    }
});

module.exports = mongoose.model('Category', CategorySchema)
