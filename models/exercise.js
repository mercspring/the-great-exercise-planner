const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    required: [true, "Your exercise must have a unique name."]
  },
  type: {
    type: String,
    required: [true, "Your exercise must have a type"],
    enum: [
      'Cardio',
      'Lifting',
      'Other'
    ]
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  distance: {
    type: Number,
  },

});




const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;