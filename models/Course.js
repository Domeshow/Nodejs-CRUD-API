const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    name: String,
    description: String,
    available: Boolean,
    created_at: Date
});

module.exports = mongoose.model('course', courseSchema);
