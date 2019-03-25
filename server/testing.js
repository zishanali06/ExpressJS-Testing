let path = require('path');
let fs = require('fs');

fs.readFile('server/subscriptionlist.json', (err, data) => {
    if(err) return console.log(err);

    let newdata = JSON.parse(data);
    console.log(newdata);
})

