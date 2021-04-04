const express = require('express');
const router = express.Router();
const Client = require('ftp');
const serveIndex = require('serve-index');

const camDir = 'd:/camera';
const filmDir = 'd:/film';
const httpDir = `${__dirname}/../../dist/`;

const ftpInfo = {
    user: 'film',
    password: ''
  };
let listFtp = {};
  
// Ftp client
const ftp = new Client();
ftp.on('ready', () => {
    ftp.list('/', (err, list) => {
        if (err) throw err;
        listFtp = list;
    });
});

// Vue frontend
router.use('/', express.static(httpDir));

// Send file to display on browser
// Download tags Content-Disposition: attachment to Save As
router.get('/exp', (req, res) => {
    const fileTest = `${camDir}/20210101_000149.jpg`;
    res.sendFile(fileTest);
});
  
router.get('/pjmasks', (req, res) => {
    const fileTest = `${filmDir}/pj masks.mp4`;
    res.sendFile(fileTest);
});

// The express.static serves the file contents
// The serveIndex is this module serving the directory
router.use('/cam', express.static(camDir), serveIndex(camDir));

module.exports = router;