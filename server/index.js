// make server
const express = require('express');
var cors = require('cors')
const path = require('path');
// const request = require('request');

const app = express();

const port = process.env.PORT || 3000;
// form a single path
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

// middleware to server static files
app.use(express.static(DIST_DIR));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.get('/analytics/authors', (req, res) => {
//   request(
//     { url: 'https://api.parsely.com/v2/analytics/authors' }, (error, response, body) => {
//       if(error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: error.message });
//       }
//       res.json(JSON.parse(body));
//     }
//   )
// });

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});


// bind endpoint
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});