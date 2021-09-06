
const express = require("express");
const app = express();
const PORT = 3001;



//to open the json file
const fs = require("fs");
const path = require("path");
//fn resolve
const pathToFile = path.resolve("./data.json");
 
app.get("/", (req, res) => {
        res.send("Hello World")
})

app.get("/resources", (req, res) => {
    //console.log(pathToFile);
    const stringifiedData = fs.readFileSync(pathToFile);
    console.log(stringifiedData);
    //console.log("From the code")
    res.send("Hello Resources")
})



app.listen(PORT, () => {
    console.log("Server is listening on port:" + PORT)
})