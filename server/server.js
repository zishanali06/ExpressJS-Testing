let express = require('express');
let path = require('path');
let app = express();

//console logging every request URL that comes in
app.use((req, res, next) => {
    console.log(req.url);
    next();
})


//creates static paths for everything in the public directory
app.use(express.static(path.join(__dirname, "../public")));


//LISTEN TO PORT 3000 for requests
app.listen(3000);

// app.use((req, res, next) => {

// })