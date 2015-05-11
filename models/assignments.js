var mongoose = require('mongoose');

var AssignmentSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String
});

module.exports = mongoose.model('assignments', AssignmentSchema);