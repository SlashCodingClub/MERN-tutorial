const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Pleass add a text value']
    }
    }, {
    timestamps: true,
    }
)

module.exports = mongoose.model('Goal', goalSchema);