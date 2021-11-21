// const port = 3000
const port = process.env.PORT || 3000
var express = require('express');

/*
  ===========================================================================
            Setup express + passportjs server for authentication
  ===========================================================================
*/

var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '..', '/build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..' , '/build/index.html'));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})