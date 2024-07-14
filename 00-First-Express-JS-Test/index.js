let express = require('express');
let app = express();

app.get("/", function (req, res) {
    res.send("HThis is Home Page");
})



app.get("/about", function (req, res) {
    res.send("This is about Page ");
})


app.get("/blog", function (req, res) {
    res.send("This is blog Page ");
})


app.get("/contact", function (req, res) {
    res.send("This is contact page");
})


app.get("/login", function (req, res) {
    res.send("This is login page");
})


app.listen(5000, function () {
    console.log('Server Run Success');
})
