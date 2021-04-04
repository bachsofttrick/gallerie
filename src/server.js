const express = require('express');
const logger = require('./express_components/serverlog');
const route = require('./express_components/serverroute');
const app = express();
const port = 3000;

// Logger
app.use(logger);

// Router
app.use(route);

// Starting server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
