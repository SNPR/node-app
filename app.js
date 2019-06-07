const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// Routes
app.get("/", (req, res) => {
  res.send("We are on home url");
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DB!");
});

app.listen(5000);
