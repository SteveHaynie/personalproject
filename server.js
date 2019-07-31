const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const controller = require('./controller.js');
const session = require('express-session');
const bcrypt = require('bcrypt');
const massive = require('massive');

massive({
    host: 'localhost',
    port: 5432,
    database: '',
    user: '',
    password: ''
}).then(db => {
    console.log("connected to db")
    app.set('db', db);
});

app.use (bodyparser.json());
app.use (cors({credentials: true, origin: 'http://localhost:3000'}));

app.post('/login', controller.login);
app.post('/signup', controller.signup);



app.listen(8080, () => {
    console.log('listening on port 8080')
})

