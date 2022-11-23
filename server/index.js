const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const mysql = require("mysql");
require("dotenv").config();

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "./")));
app.use(express.json());
app.use(cors());

// connection to DB
const con = mysql.createConnection({
  host: process.env.HOSTNAME,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});

// set up home route
app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "./", "index.html"));
});

app.get("/test", async (req, res) => {
  res.send("I see you are testing!");
});

// get all ingredients
app.get("/getAllIngredients", async (req, res) => {
  con.query("SELECT * FROM csingredients.ingredients;", (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "index.html"));
});

app.listen(port, () => {
  console.log(
    `Success! Your application is running on http://localhost:${port}.`
  );
});
