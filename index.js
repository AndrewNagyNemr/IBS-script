const express = require("express");
const fs = require("fs")

const app = express();

const port = process.env.PORT || 3000

app.get("/", ()=>{
    fs.writeFileSync("text.txt", "I'm working")
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})