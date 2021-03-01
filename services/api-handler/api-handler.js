const todoService = require('../todoService/todo-service')();
const express =  require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJson = require('../../swagger.js');
require('dotenv').config()

const onGetTodo = (req, res) => {
    todoService.fetchToDoFromDb()
        .then((response) => res.json(response))
        .catch((err) => res.json(rs.fail(err)));
};

const onPostAuthentication= (req, res) => {
    console.log('in authentication');
    res.json(rs.done());
}

const start = () => {
    /** 
     * @config 
     * PORT
     */
    const PORT = process.env.port || 8080;

    const app = express();

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

    var corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }

    // MIDDLEWARE LAYER
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json());

    // GET - todo
    app.get('/todo', cors(corsOptions), onGetTodo);
    app.post('/authentication', onPostAuthentication)

    app.listen(PORT, () => {
        console.log('Capi is listening to port: ' + PORT);
    })
    return app;
}
module.exports = {
    start,
    onGetTodo,
    onPostAuthentication
};