const express = require('express');
const Client = require('ftp');
const serveIndex = require('serve-index');
const logger = require('./serverlog');
const app = express();
const port = 3000;

const ftpInfo = {
  user: 'film',
  password: ''
};
let listFtp = {};
const dir = 'd:/camera';
const dirFilm = 'd:/film';

// Ftp client
const ftp = new Client();
ftp.on('ready', () => {
  ftp.list('/', (err, list) => {
    if (err) throw err;
    listFtp = list;
  });
});

// Logger
app.use(logger);

// The express.static serves the file contents
// The serveIndex is this module serving the directory
app.use('/', express.static(dir), serveIndex(dir));

// Send file to display on browser
// Download tags Content-Disposition: attachment to Save As
app.get('/cam', (req, res) => {
  const fileTest = `${dir}/20210101_000149.jpg`;
  res.sendFile(fileTest);
});

app.get('/pjmasks', (req, res) => {
  const fileTest = `${dirFilm}/pj masks.mp4`;
  res.sendFile(fileTest);
});

// Starting server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
