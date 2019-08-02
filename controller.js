const bcrypt = require('bcrypt');
const bodyparser = require('body-parser');
const session = require('express-session');

login = async (req, res) => {
    try {
        const db = req.app.get('db');

        const [user] = await db.users.find({username: req.body.username});
        if (!user) return res.status(400).send('please enter valid credentials');
        console.log(user)
        const verified = await bcrypt.compare(req.body.password, user.password)
        if(!verified) return res.status(400).send('please enter valid credentials');

        delete user.password;
        // req.session.user = user;

        return res.send('successfully logged in')

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }

}

managementLogin = async (req, res) => {
    try {
        const db = req.app.get('db');

        const [management] = await db.management.find({username: req.body.username});
        if (!management) return res.status(400).send('please enter valid credentials');
        
        const verified = await bcrypt.compare(req.body.password, management.password)
        if(!verified) return res.status(400).send('please enter valid credentials');

        delete management.password;
        // req.session.user = management;

        return res.send('successfully logged in')

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }

}

signup = async (req,res,next) => {
    try {
       const db = req.app.get('db');
       
       const hash = await bcrypt.hash(req.body.password, 10)

       const newUser = await db.users.insert({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        username: req.body.email,
        password: hash

       })

       delete newUser.password;

       res.send(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }

}

managementSignup = async (req,res,next) => {
    try {
       const db = req.app.get('db');
       
       const hash = await bcrypt.hash(req.body.password, 10)

       const newUser = await db.management.insert({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        username: req.body.email,
        password: hash

       })

       delete newUser.password;

       res.send(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }

}

module.exports = {
login,
signup,
managementLogin,
managementSignup


}