const config = require("./utils/config");
const express = require("express");
require("express-async-errors"); //eliminates trycatch next(exception)
const app = express();
const cors = require("cors");
const quizRouter = require("./controllers/quiz");
const mongoose = require("mongoose");

console.log("connecting to", config.MONGODB_URI);
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/api", quizRouter);

module.exports = app;
