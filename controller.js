const bcrypt = require("bcrypt");
const bodyparser = require("body-parser");
const session = require("express-session");


const completeWorkOrder = async (req,res) => {
  try {
    const db = req.app.get("db");

     await db.query(
      `INSERT INTO work_orders_archive (unit_number,tenant_name, issue, notes) VALUES('${req.body.unit}', '${
        req.body.tenant}', '${req.body.issue}', '${req.body.notes}');
        DELETE FROM work_orders WHERE id = '${req.body.id}'; `
    );
  

        const workOrder = await db.query ( `SELECT * FROM work_orders ORDER BY id`);
    res.send(workOrder);
  } catch (error) {
      console.error(error)
  }

}
const handleDelete = async (req, res) => {
  try {
    const db = req.app.get("db");

     await db.query(
      `UPDATE work_orders SET unit_number = ${req.body.unit}, tenant_name = '${
        req.body.tenant}', issue = '${req.body.issue}' WHERE id = ${req.body.id};
        `
    );
        const workOrder = await db.query ( `SELECT * FROM work_orders ORDER BY id`);
    res.send(workOrder);
  } catch (error) {
      console.error(error)
  }

}



const updateWorkOrder = async (req, res) => {

  try {
    const db = req.app.get("db");

     await db.query(
      `UPDATE work_orders SET unit_number = ${req.body.unit}, tenant_name = '${
        req.body.tenant}', issue = '${req.body.issue}' WHERE id = ${req.body.id};
        `
    );
        const workOrder = await db.query ( `SELECT * FROM work_orders ORDER BY id`);
    res.send(workOrder);
  } catch (error) {
      console.error(error)
  }
};

const currentUser = (req, res) => {

res.send(req.session.user)
}

const workOrders = async (req, res) => {
  try {
    const db = req.app.get("db");

    const workOrders = await db.query(`SELECT * FROM work_orders ORDER BY id`);

    res.send(workOrders);
  } catch (error) {
    console.error(error);
  }
};

createWorkOrder = async (req, res) => {
  try {
    const db = req.app.get("db");

    const newWorkOrder = await db.work_orders.insert({
      unit_number: req.body.unit,
      tenant_name: req.body.tenant,
      issue: req.body.issue,
      user_id: req.body.user
    });
    const workOrders = await db.query(`SELECT * FROM work_orders ORDER BY id`);


    res.send(workOrders);
  } catch (error) {}
};

const login = async (req, res) => {
  try {
    const db = req.app.get("db");

    const [user] = await db.users.find({ username: req.body.username });
    if (!user) return res.status(400).send("please enter valid credentials");
    
    const verified = await bcrypt.compare(req.body.password, user.password);
    if (!verified)
      return res.status(400).send("please enter valid credentials");

    delete user.password;
    req.session.user = user;

    return res.send(req.session.user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};


const signup = async (req, res, next) => {
  try {
    const db = req.app.get("db");

    const hash = await bcrypt.hash(req.body.password, 10);

    const newUser = await db.users.insert({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      username: req.body.email,
      password: hash,
      role: 'Tenant'
    });

    delete newUser.password;

    res.send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};



module.exports = {
  login,
  signup,
  workOrders,
  createWorkOrder,
  updateWorkOrder,
  currentUser,
  handleDelete,
  completeWorkOrder
};
