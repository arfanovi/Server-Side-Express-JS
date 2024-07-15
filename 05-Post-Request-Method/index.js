

let express = require('express');
let app = express();





app.post("/", function(req, res) {
    // res.send("This is Simple post request");


    let firsName = req.query.firstName;
    let lastName = req.query.lastName;

    res.send(firsName + " " + lastName);
})








app.listen(1600, function () {
    console.log('Server Run Success')
})