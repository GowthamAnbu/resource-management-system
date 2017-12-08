const path = require('path');

const rootPath = path.normalize(__dirname +'/../../'),
      auth0_domain = 'initial-auth0.auth2.com',
      auth0_api_audience = 'http://localhost:8083/api/';

module.exports = {
  development: {
    rootPath: rootPath,
    AUTH0_DOMAIN: auth0_domain,
    AUTH0_API_AUDIENCE: auth0_api_audience,
		MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/resource-management-system',
		port: process.env.PORT || 3030
	},
	production: {
    rootPath: rootPath,
    AUTH0_DOMAIN: auth0_domain,
    AUTH0_API_AUDIENCE: auth0_api_audience,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://gowtham:password@ds133856.mlab.com:33856/resource-management-system',
		port: process.env.PORT || 8083
	}
};
