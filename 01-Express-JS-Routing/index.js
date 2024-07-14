let express = require('express');
let app = express();




app.get("/", function(res, req){
    res.send("This is Home Route")
});

// app.post("/login", function(res, req){
//     res.send("this is login page")
// });

// app.put("/blog", function(res, req){
//     res.send("this is Blog page")
// });

// app.delete("about", function(res, req){
//     res.send("this is about")
// });






app.listen(9000, function () {
    console.log('Server Run Success');
});
