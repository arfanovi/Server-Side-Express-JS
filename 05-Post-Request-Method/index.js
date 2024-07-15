

let express = require('express');
let app = express();


let bodyParser = require('body-parser')



/*
app.post("/", function(req, res) {
    // res.send("This is Simple post request");


    let firsName = req.query.firstName;
    let lastName = req.query.lastName;

    res.send(firsName + " " + lastName);
})

*/




//  Post Request With Header Properties

/*
app.post("/", function(req, res) {

    let userName = req.header("userName");
    let password = req.header("password");

    res.send("User Name:" + userName + "Password:" + password);

    

})

*/




// Post application-json

app.use(bodyParser.json());

app.post("/", function(req, res) {
   let jsonData =  req.body;

   let jsonString = JSON.stringify(jsonData)

//    Specific JSON Data 
    let name = jsonData["name"];
    res.send(name)

    // res.send(jsonString);

})


app.listen(1600, function () {
    console.log('Server Run Success')
})