const express = require("express");
const colors = require("colors");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const exphb = require("express-handlebars");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMidleware");
const PORT = process.env.PORT || 5000;

const app = express();

// Init database
connectDB();

// middleware body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express-handlebars

app.engine("handlebars", exphb.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/contact", (req, res) => {
  res.render("home");
});

// login route API
app.use("/login", require("./routes/login"));

// Static folder frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// middleware
app.use(errorHandler);

// The port i listening
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`.cyan.underline.bold)
);
