const mongoose = require ('mongoose');
const mongoUrl = 'mongodb://localhost:27017/newDb'

mongoose.connect(mongoUrl, { useNewUrlParser: true });

module.exports = mongoose;