const mongoose = require("mongoose");

const competition = new mongoose.Schema({
    competition_id: {
        type: Number,
        required: true,
    },
    competition_name: {
        type: String,
        required: true,
    }
});

const comp = mongoose.model("competition", competition);  // Change to lowercase "users" here

module.exports = comp;
