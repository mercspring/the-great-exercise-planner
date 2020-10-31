const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const Workout = require("../models/workout.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.render("index", {workout:data});
});

// Export routes for server.js to use.
module.exports = router;
