const swaggerUi = require('swagger-ui-express');

// Metadata
const metaData = require('./swagger-doc/meta-data');

// Paths
const todoPath = require('./swagger-doc/paths/todo-path');
const bookPath = require('./swagger-doc/paths/book-path');

// Assemble the json
const swaggerJson = {
    ...metaData,
    "paths": {
        todo: { ...todoPath },
        book: { ...bookPath }
    }
}

function start(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));
}

module.exports.start = start;