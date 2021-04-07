const express = require('express');
const logger = require('./express_components/logger');
const router = require('./express_components/router');
const app = express();
const port = 3000;

// Logger
app.use(logger);

// Router
app.use(router);

// Starting server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
