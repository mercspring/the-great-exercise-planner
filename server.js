const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const app = express();

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db", { useNewUrlParser: true });

// db.Workout.create({ name: "Crashing through the forest" })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });
  // Import routes and give the server access to them.
  const frontendRoutes = require("./controllers/frontendController");
  app.use(frontendRoutes)
  const apiRoutes = require("./controllers/apiController");
  app.use('/api/', apiRoutes)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});