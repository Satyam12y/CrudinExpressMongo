const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    email: {
        type: String,
        required: true
    },
    mobile: String,
    age: Number,
    address: String
});

module.exports = mongoose.model("Contact", contactSchema);