const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Enter exercise name:"
            },
            type: {
                type: String,
                trim: true,
                required: "Enter type of workout:"
            },
            durration: {
                type: Number,
                require: "How long was the exercise:"
            },
            reps: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            distance: {
                type: Number,
            },
            sets: {
                type: Number,
            }
        }
    ],
    day: {
        type: Date.apply,
        default: Date.now
    }
});

module.exports = mongoose.model("Workout", workoutSchema);


