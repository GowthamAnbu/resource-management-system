const mongoose = require('mongoose');

module.exports = function(config) {

  mongoose.connect(config.MONGO_URI, { useMongoClient: true });
  const monDb = mongoose.connection;

  monDb.on('error', function() {
    console.error('MongoDB Connection Error. Please make sure that', config.MONGO_URI, 'is running.');
  });

  monDb.once('open', function callback() {
    console.info('Connected to MongoDB:', config.MONGO_URI);
  });

}
