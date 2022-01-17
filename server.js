const express = require('express'); //import dependency

//create a web server (not running at this point)
const app = express();
//specify port on which server will run
const port = 3000;

// serve us static content (web pages from public directory)
app.use(express.static('public'));

//start the web server listening
app.listen(port, () => {
    console.log('Server listening at http://localhost:3000')
})