let express = require('express');
let path = require('path');
let app = express();
let fs = require('fs');
let bodyParser = require('body-parser');

//console logging every request URL that comes in
app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.use(bodyParser.urlencoded({ extended: false }));

//handle /subscribe URL from form in Index
app.post('/subscribe', (req, res) => {
    let subarray = [];

    let newsub = {
        name: req.body.name,
        email: req.body.emailaddress
    }
    fs.readFile('server/subs.json', (err, data) => {
        if (err) return console.log(err);
        
        let newdata = JSON.parse(data);
        subarray = newdata;
        subarray.push(newsub);
        let databacktojson = JSON.stringify(subarray);
        fs.writeFile('server/subs.json', databacktojson, (err, data) => {
            if(err) return console.log(err);
            console.log('New Subscriber Logged in subs.json');
        })
    })


    // console.log(sublist);
    // let newdatatoJSON = JSON.stringify(newsub);
    // fs.appendFileSync('server/subscriptionlist.json', );
    res.send('Thanks for Subscribing');
})

app.get('/subscribers', (req, res, next) => {
    fs.readFile('server/subs.json', (err, data) => {
        if (err) return console.log(err);
        
        let datatoarray = JSON.parse(data);

        res.send(datatoarray);
    })
})


//creates static paths for everything in the public directory
app.use(express.static(path.join(__dirname, "../public")));


//LISTEN TO PORT 3000 for requests
app.listen(3000);
