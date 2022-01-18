// const port = 3000
const port = process.env.PORT || 3000
var express = require('express');

/*
  ===========================================================================
            Setup express 
  ===========================================================================
*/

var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'/urban-sanctuary', '/build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/urban-sanctuary', '/build/index.html'));
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});