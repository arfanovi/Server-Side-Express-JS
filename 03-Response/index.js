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




// JSON Response 
app.get("/four", function(req, res){

    let myJSONArray = {
        name: "Ovi",
        city: "Dhaka",
        occupation: "Engineering"
    }

    res.json(myJSONArray)
})


// Upload 
app.get("/five", function(req, res){
    res.download("./upload/upload.jpg")
})






// Response Redirect


app.get("/Bangladesh", function(req, res){
    
    res.redirect("http://localhost:1000/India")

})

app.get("/India", function(req, res){

    res.send("This is india")

})



//  Response Header

app.get("/Six", function(req, res){
    res.append("name", "Ovi")
    res.append("city", "mirpur")
    res.append("occupation", "Engineering")
    res.status(201).end("Header")

})




app.listen(1000, function () {
    console.log('Server Run Success');
});
