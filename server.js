//import dependencies 
require("dotenv").config();


const express = require("express");
const cors = require("cors");

const morgan = require("morgan");



//import JSON files 
const projects = require("./projects.json");
const about = require("./about.json");

//App object
const app = express();

//Middleware 
app.use(cors());
app.use(morgan("dev"));

//Test Route
app.get("/", (req, res) => {
    res.send("Check out my Portfolio");
});

//Routes
app.get("/projects", (req, res) => {
    res.json(projects);
});

app.get("/about" , (req, res) => {
    res.json(about);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

