const bcrypt = require("bcrypt");
const bodyparser = require("body-parser");
const session = require("express-session");



const tenantWorkOrders = async (req, res) => {
  try {
    const db = req.app.get("db");

    await db.query(`SELECT * FROM work_orders WHERE user_id = '${req.params.id}';`);

  const workOrder = await db.query ( `SELECT * FROM work_orders ORDER BY id`);
    res.send(workOrder);
  } catch (error) {
      console.error(error)
  }

}


const completeWorkOrder = async (req,res) => {
  try {
    const db = req.app.get("db");

     await db.query(
      `INSERT INTO work_orders_archive (unit_number,tenant_name, issue, notes, completed_at) VALUES('${req.body.unit}', '${
        req.body.tenant}', '${req.body.issue}', '${req.body.notes}', NOW());
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

    await db.query(`DELETE FROM work_orders WHERE id = '${req.params.id}';`);

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
      `UPDATE work_orders SET unit_number = '${req.body.unit}', tenant_name = '${
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

const createWorkOrder = async (req, res) => {
  try {
    const db = req.app.get("db");

    const userID = await db.query (
      ` SELECT id FROM users WHERE unit_number = '${req.body.unitNumber}'; `
   )
    const newWorkOrder = await  db.query(
      `INSERT INTO work_orders (unit_number ,tenant_name, issue, user_id, created_at ) VALUES('${req.body.unitNumber}', '${
        req.body.tenantName}', '${req.body.issue}', '${userID[0].id}', NOW());`
    );
    

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

const logout = async (req, res) => {
  return req.session.destroy((err) => {res.send("succesfully logged out")})

}


const signup = async (req, res, next) => {
  try {
    const db = req.app.get("db");

    const hash = await bcrypt.hash(req.body.password, 10);

    const newUser = await db.query(
      `INSERT INTO users (first_name, last_name, username, password, unit_number, role) VALUES('${req.body.firstName}',
       '${req.body.lastName}', '${req.body.email}', '${hash}', '${req.body.unitNumber}', '${req.body.role}');`)

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
  completeWorkOrder,
  logout,
  tenantWorkOrders
};
