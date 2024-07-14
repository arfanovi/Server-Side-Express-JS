let express = require('express');
let app = express();


// Simple String Response 
    // send method use => body 
    // end method use => ending point


app.get("/one", function(req, res) {
    res.send("This is Simple String Route");
});


app.post("/two", function(req, res) {
    res.end("This is Simple String Route");
});

// Response Status Code 
app.get("/three", function(req, res){
    res.status(401)
    res.end("Unauthorize") 
})



app.listen(1000, function () {
    console.log('Server Run Success');
});
