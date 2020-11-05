const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", async function(req, res) {
    let workouts = await db.Workout.find().populate("exercises");
    
    let arr = ["test", "array"]
    console.log("workouts:", workouts)
    workouts = workouts.map(elm => JSON.stringify(elm));
    // workouts = JSON.stringify(workouts);
    console.log("workouts:", workouts);
    console.log("workouts type", typeof workouts);
    console.log("arr type", typeof arr);

    res.render("index", {workout: workouts});
});

// Export routes for server.js to use.
module.exports = router;
