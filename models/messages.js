const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    content: {
        type: String,
        require: true
    }
}, { timestamps: true} );

module.exports = mongoose.model('Message', messageSchema);