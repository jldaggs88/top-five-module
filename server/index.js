// make server
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
// form a single path
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const testResponse = {
  foo: 'bar',
  bar: 'foo'
};

// middleware to server static files
app.use(express.static(DIST_DIR));

// request
app.get('/api', (req, res) => {
  res.send(testResponse);
});
app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

// bind endpoint
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});