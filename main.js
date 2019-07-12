const express = require('express');
const fs = require('fs');
const url = require('url');
const path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5

const app = express();
const port = 7500;

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  // POST method route
  app.post('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.body);
     res.json(req.body);

   // res.json({"ok":"true"});
  });

app.listen(port, () => console.log(`listening on port ${port}!`))