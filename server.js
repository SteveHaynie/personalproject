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
  

}));

app.use (bodyparser.json());
app.use (cors({credentials: true, origin: 'http://localhost:3000'}));

app.get('/workorders', controller.workOrders);
app.get('/currentuser', controller.currentUser);
app.get("/tenant_work_orders/:id" , controller.tenantWorkOrders);
app.get('/workordersarchive', controller.workordersarchive)
app.get('/search_work_orders_archive/:id' , controller.searchworkordersarchive)
app.get('/logout', controller.logout)

app.put('/updateworkorder', controller.updateWorkOrder)
app.put('/complete_work_order', controller.completeWorkOrder)

app.post('/login', controller.login);
app.post('/signup', controller.signup);
app.post('/create_work_order', controller.createWorkOrder)

app.delete('/delete_work_order/:id', controller.handleDelete)



app.listen(8080, () => {
    console.log('listening on port 8080')
})

