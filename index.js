/**
 * dependencies
 * param {  }
 * return {  }
 */
const express =  require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config()

// local import
const todoService = require('./services/todoService/todo-service')();
const rs = require('./services/response/response')();

/** 
 * @config 
 * PORT
 */
const PORT = process.env.port || 8080;

const app = express();

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
app.get('/todo', cors(corsOptions), (req, res) => {
    todoService.fetchToDoFromDb()
        .then((response) => res.json(rs.done((response))))
        .catch((err) => res.json(rs.fail(err)));
});

app.post('/authentication', (req, res) => {
    console.log('in authentication');
    res.json(rs.done());
})

app.listen(PORT, () => {
    console.log('Capi is listening to port: ' + PORT);
})
