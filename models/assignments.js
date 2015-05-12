var mongoose = require('mongoose');

var AssignmentSchema = new mongoose.Schema({
    name: String,
    score: Number,
    date_completed: Date
});

module.exports = mongoose.model('assignments', AssignmentSchema);