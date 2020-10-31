const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db", { useNewUrlParser: true });


  // Import routes and give the server access to them.
  const frontendRoutes = require("./controllers/frontendController");
  app.use(frontendRoutes)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});