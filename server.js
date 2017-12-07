const express = require('express');
const path = require('path');
const config = require('./server/config/config');

let app = express();

require('./server/config/mongoose')(config);
require('./server/config/express')(app);

const port = process.env.PORT || '8083';
app.set('port', port);

if (process.env.NODE_ENV !== 'dev') {
  app.use('/', express.static(path.join(__dirname, './dist')));
}

require('./server/config/api')(app, config);

if (process.env.NODE_ENV !== 'dev') {
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
  });
}

app.listen(port, () => console.log(`Server running on localhost:${port}`));
