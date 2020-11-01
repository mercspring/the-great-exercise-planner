const express = require("express");
const mongoose = require("mongoose");
// const { db } = require("../models/workout.js");

const router = express.Router();

const db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", async function(req, res) {
    const workouts = await db.Workout.find().populate("exercises");
    res.json(workouts);
});

router.post("/:id", async function(req, res){
    const newExercise = await db.Exercise.create(req.body);
    const result = await db.Workout.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.params.id)},{$push: { exercises: newExercise.id}}, {new: true});
    res.json(result);
})

router.post("/", async function(req, res){
    const newWorkout = await db.Workout.create(req.body);
    res.status(200).json(newWorkout);
})

// Export routes for server.js to use.
module.exports = router;
