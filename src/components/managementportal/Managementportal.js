import React from "react";
import "./Managementportal.css";
import axios from "axios";
import Modify from "../modify/modify.js.js";
import WorkOrder from "../managementworkorder/workOrder.js.js";
import CreateNew from "../createnew/createNew.js.js";
import Complete from "../complete/complete.js.js";
import AddLogin from "../addlogin/addLogin.js.js";
import WorkOrdersArchive from "../managementworkorderarchive/workordersarchive.js.js";
import { Route } from "react-router-dom";

class Managementportal extends React.Component {
  constructor() {
    super();

    this.state = {
      workOrders: [],
      workOrdersArchive: [],
      view: "",
      unitNumber: "",
      tenantName: "",
      issue: "",
      notes: "",
      loading: false,
      currentIndex: 0,
      isManagement: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.updateWorkOrders = this.updateWorkOrders.bind(this);
    this.deleteWorkOrder = this.deleteWorkOrder.bind(this);
    this.updateWorkOrdersArchive = this.updateWorkOrdersArchive.bind(this);
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    axios.get("/workorders").then(response => {
      this.setState({
        workOrders: response.data
      });
    });
    axios.get("/workordersarchive").then(response => {
      this.setState({
        loading: false,
        workOrdersArchive: response.data
      });
    });
    axios.get("/currentuser").then(response => {
      if(response.data.role === "Manager") {
        this.setState ({isManagement: true})
      }
      else if (response.data.role === "Tenant"){
        this.props.history.push("/tenantportal")
      }
    });
  }

  handleLogout = async () => {
    try {
      await axios.get("/logout").then(response => {
        alert(response.data);
      });

      this.props.history.push("/");
    } catch (error) {
      alert("cannot logout, please close browser");
    }
  };

  updateWorkOrders(workOrders) {
    this.setState({
      workOrders: workOrders
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  updateWorkOrdersArchive(workOrders) {
    this.setState({
      workOrdersArchive: workOrders
    });
  }

  handleSubmit() {
    const body = {
      unitNumber: this.state.unitNumber,
      tenantName: this.state.tenantName,
      issue: this.state.issue
    };
    axios.post("/create_work_order", body).then(response => {
      this.setState({
        workOrders: response.data,
        unitNumber: "",
        tenantName: "",
        issue: ""
      });
      alert("Work Order Created");
      this.props.history.push("/managementportal/work_orders");
    });
  }

  deleteWorkOrder(workOrderId) {
    axios
      .delete(`/delete_work_order/${workOrderId}`)
      .then(response => {
        return axios.get("/workOrders");
      })
      .then(response => {
        this.setState({
          workOrders: response.data,
          unitNumber: "",
          tenantName: "",
          issue: ""
        });
        alert("Work Order Deleted");
      });
  }
  addLogin() {
    return <AddLogin />;
  }

  render() {
    if (this.state.loading) return <div>Loading</div>;
    if(!this.state.isManagement) return <div>Please Login as Management</div>;

    return (
      <div className="Managementportal">
        <h1 className="managementwelcome">
          Welcome to the Management Portal
          <button
            className="managementlogoutbutton"
            onClick={this.handleLogout}
          >
            Logout
          </button>
        </h1>
        <div className="managementnavbarcontainer">
          <div className="managementnavbar">
            {/* <Link to="/managementportal/work_orders" >  */}
            <button
              className="managementnavbarbutton"
              onClick={() => {
                this.props.history.push("/managementportal/work_orders");
              }}
            >
              View Current Work Orders
            </button>

            <button
              className="managementnavbarbutton"
              onClick={() => {
                this.props.history.push("/managementportal/new_work_order");
              }}
            >
              Create New Work Order
            </button>
            <button
              className="managementnavbarbutton"
              onClick={() =>
                this.props.history.push("/managementportal/add_tenant_login")
              }
            >
              Add Tenant Login
            </button>
            {/* <button className="managementnavbarbutton">
              Update Tenant Information
            </button> */}
            <button
              className="managementnavbarbutton"
              onClick={() => {
                this.props.history.push(
                  "/managementportal/work_orders_archive"
                );
              }}
            >
              View Archived Work Orders
            </button>
          </div>

          <Route
            path="/managementportal/work_orders"
            render={props => {
              return (
                <WorkOrder
                  {...props}
                  workOrders={this.state.workOrders}
                  updateWorkOrders={this.updateWorkOrders}
                  index={this.state.currentIndex}
                  delete={this.deleteWorkOrder}
                />
              );
            }}
          />

          <Route
            path="/managementportal/work_orders_archive"
            render={props => {
              return (
                <WorkOrdersArchive
                  {...props}
                  
                  workOrdersArchive={this.state.workOrdersArchive}
                  updateWorkOrdersArchive={this.updateWorkOrdersArchive}
                />
              );
            }}
          />

          <Route
            path="/managementportal/new_work_order"
            render={props => {
              return (
                <CreateNew
                  {...props}
                  unitNumber={this.state.unitNumber}
                  tenantName={this.state.tenantName}
                  issue={this.state.issue}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              );
            }}
          />

          <Route
            path="/managementportal/modify_work_order/:id"
            render={props => {
              return (
                <Modify
                  {...props}
                  workOrders={this.state.workOrders}
                  unitNumber={this.state.unitNumber}
                  tenantName={this.state.tenantName}
                  issue={this.state.issue}
                  handleChange={this.handleChange}
                  submit={this.handleSubmit}
                  updateWorkOrders={this.updateWorkOrders}
                />
              );
            }}
          />

          <Route
            path="/managementportal/complete_work_order/:id"
            render={props => {
              return (
                <Complete
                  {...props}
                  workOrders={this.state.workOrders}
                  unitNumber={this.state.unitNumber}
                  tenantName={this.state.tenantName}
                  issue={this.state.issue}
                  handleChange={this.handleChange}
                  submit={this.handleSubmit}
                  updateWorkOrders={this.updateWorkOrders}
                />
              );
            }}
          />
          <Route
            path="/managementportal/add_tenant_login"
            render={props => {
              return <AddLogin {...props} />;
            }}
          />
        </div>
      </div>
    );
  }
}

export default Managementportal;
