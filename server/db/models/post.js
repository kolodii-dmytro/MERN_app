const mongoose = require('../mongose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        title:{type: String},
        text:{type: String}, 
        autorId:{type: String,
        default: 'guest0000000000000000000'},
        created: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model('Post', PostSchema);