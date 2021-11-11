const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    available: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('course', courseSchema);
