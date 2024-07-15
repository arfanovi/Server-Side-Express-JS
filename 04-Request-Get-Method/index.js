let express = require('express');
let app = express();





app.get('/', function (req, res) {


    // Extract query parameters from the URL
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    // Respond with the concatenated firstName and lastName
    res.end(firstName + " " + lastName);


});



app.listen(1500, function() {
    console.log('Server Run Success');
});
