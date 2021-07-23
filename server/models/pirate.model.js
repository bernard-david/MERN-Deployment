const mongoose = require('mongoose');

const PirateSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pirate name is required!!"],
        minlength: [2, "Pirate name must be at least 2 characters long!!"]
    },
    image: {
        type: String,
        required: [true, "Pirate must have a picture!!"],
    },
    chests: {
        type: Number,
        required: [true, "Pirate must have some booty!!"],
        min: [1, "Please choose at least one"]
    },
    phrase: {
        type: String,
        required: [true, "Pirate must have a catch phrase!!"],
        minlength: [2, "Catch phrase must be at least 2 characters long!!"]
    },
    position: {
        type: String,
        required: [true, "Pirate must have a position. Choose one now!!"]
    },
    pegLeg: {
        type: Boolean,
    },
    eyePatch: {
        type: Boolean,
    },
    hookHand: {
        type: Boolean,
    }
}, {timestamps: true})

const Pirate = mongoose.model("Pirate", PirateSchema);
module.exports = Pirate;