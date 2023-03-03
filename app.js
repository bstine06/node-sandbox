const express = require('express');
const app = express();

app.get("/gallery", function(req, res){
    res.send("GALLERY");
});

app.get("/", function(req, res){
    res.send("HOMEPAGE");
});

app.get("/*", function(req, res){
    res.send("PAGE NOT FOUND");
})

app.listen(3000, () => console.log("Node.js sandbox running on port 3000..."));