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

app.use(session({
    secret: 'begawk',
    resave: true,
    saveUninitialized: true,
    // cookie: {
    //     maxAge: 30000
    // }

}));

app.use (bodyparser.json());
app.use (cors({credentials: true, origin: 'http://localhost:3000'}));
app.put('/updateWorkOrder', controller.updateWorkOrder)
app.get('/workOrders', controller.workOrders);
app.get('/currentUser', controller.currentUser);
app.post('/login', controller.login);
app.put('/complete_work_order', controller.completeWorkOrder)
app.post('/signup', controller.signup);
app.post('/createWorkOrder', controller.createWorkOrder)
app.delete('/delete_work_order/:id', controller.handleDelete)



app.listen(8080, () => {
    console.log('listening on port 8080')
})

