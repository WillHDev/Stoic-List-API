
const express = require("express");
const app = express();
const PORT = 3001;



//to open the json file
const fs = require("fs");
const path = require("path");
//fn resolve
const pathToFile = path.resolve("./data.json");
 
const getResources = () => JSON.parse(fs.readFileSync(pathToFile));

app.get("/", (req, res) => {
        res.send("Hello World")
})

app.get("/api/resources", (req, res) => {
const resources = getResources();
console.log("HERE" + resources);
    res.send(resources);
})



app.listen(PORT, () => {
    console.log("Server is listening on port:" + PORT)
})