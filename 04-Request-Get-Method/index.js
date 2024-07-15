
let express = require('express');
let app = express();




app.get('/', function (req, res) {
    res.end('This is simple get request')
})




app.listen(1500, function() {
    console.log(('Server Run Success'))
})