const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ]
});

WorkoutSchema.methods.coolifier = function() {
  this.username = `${this.username}...the Coolest!`;
  return this.username;
};



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;