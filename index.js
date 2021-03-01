const apiHandler = require('./services/api-handler/api-handler');
const swaggerHandler = require('./swagger');

// 1. import todo service
// 2. verify connection with bapi
// 3. api start 
const app = apiHandler.start();
swaggerHandler.start(app);