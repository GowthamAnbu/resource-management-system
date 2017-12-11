const express = require('express');

let env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
let app = express();

const config = require('./server/config/config')[env];
require('./server/config/mongoose')(config);
require('./server/config/express')(app, config);
require('./server/config/routes')(app);
require('./server/config/api')(app, config);

app.listen(config.port, () => console.log(`Server running on localhost:${config.port}`));
