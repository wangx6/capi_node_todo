/**
 * dependencies
 * param {  }
 * return {  }
 */
const express =  require('express');
const bodyParser = require('body-parser');
const helmet = require("helmet");
require('dotenv').config()


const todoService = require('./services/todoService/todo-service')();
const rs = require('./response')();

const PORT = process.env.port || 8080;

const app = express();


// MIDDLEWARE LAYER
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

function gm1(req, req, next) {
    console.log('global');
    next();
}

app.use(gm1);

app.get('/todo', (req, res) => {
    todoService.fetchToDoFromDb()
        .then((response) => {
            res.json(rs.done((response)))
        })
        .catch((err) => {
            res.json(rs.fail(err));
        });
});

const m1 = (req, res, next) => {
    console.log('i am in M1');
    next();
};

function author() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('axya-------------------');
            resolve('done');
        }, 2000);
    });
}

const m2 = async (req, res, next) => {
    const rs = await author();
    next();
};

app.post('/authentication', [m2, m1] , (req, res) => {
    console.log('in anthentication');
    res.json(rs.done());
})

app.listen(PORT, () => {
    console.log('capi is listening to port: ' + PORT);
})
