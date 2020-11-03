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

router.post("/exercises/:id", async function(req, res){
    const newExercise = await db.Exercise.create(req.body);
    const result = await db.Workout.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.params.id)},{$push: { exercises: newExercise.id}}, {new: true});
    res.json(result);
})

router.delete("/exercises/:wid/:exid", async function(req, res){
    const deleteExercise = await db.Exercise.deleteOne({_id: mongoose.Types.ObjectId(req.params.exid)});
    const result = await db.Workout.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.params.wid)},{$pull: { exercises: req.params.exid}}, {new: true});
    console.log(deleteExercise, result)
    res.status(200).send(result);
})

router.post("/workouts", async function(req, res){
    const newWorkout = await db.Workout.create(req.body);
    res.status(200).json(newWorkout);
})

router.delete("/workouts/:id", async function(req, res){
    console.log(req.params.id)
    const workout = await db.Workout.deleteOne({_id: mongoose.Types.ObjectId(req.params.id)});
    res.status(200).json(workout);
})

// Export routes for server.js to use.
module.exports = router;
