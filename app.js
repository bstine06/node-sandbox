const express = require('express');
const http = require('http');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));


//routes
app.get("/gallery", function(req, res){
    res.render("gallery");
});

app.get("/", function(req, res){
    res.send("HOMEPAGE");
});

app.get("/*", function(req, res){
    res.send("PAGE NOT FOUND");
})

const server = http.createServer(app);
server.listen(3000, () => console.log("Node.js & express sandbox running on port 3000..."));