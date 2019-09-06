import React from "react";
import "./Tenantportal.css";
import { Route } from "react-router-dom";
import axios from "axios";
import TenantWorkOrder from "../tenantworkorder/tenantworkorder.js";
import TenantCreateNew from "../tenantcreatenew/tenantcreatenew.js";

class Tenantportal extends React.Component {
  constructor(props) {
    super(props);

    const user = props.currentUser;

    this.state = {
      workOrders: [],
      unitNumber: user.unit_number,
      firstName: user.first_name,
      lastName: user.last_name,
      id: user.id,

      issue: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getWorkOrders = this.getWorkOrders.bind(this);
  }

  componentDidMount() {
    axios.get("/currentuser").then(response => {
      this.setState({
        currentUser: response.data
      });
    });
  }

  getWorkOrders() {
    axios
      .get(`/tenant_work_orders/${this.state.currentUser.id}`)
      .then(response => {
        this.setState({
          workOrders: response.data
        });
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

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    const body = {
      unitNumber: this.state.currentUser.unit_number,
      tenantName: this.state.currentUser.first_name,
      issue: this.state.issue
    };
   
    axios.post("/create_work_order", body).then(response => {
      this.setState({
        workOrders: response.data,
        issue: ""
      });
      alert("Work Order Created");
    });
  }

  render() {
    
    return (
      <div className="Tenantportal">
        <h1 className="welcometenant">
          Welcome to the Tenant Portal
          <button
            className="tenantlogoutbutton"
            onClick={this.handleLogout}
          >
            Logout
          </button>
        </h1>
        <div className="tenantnavbarcontainer">
          <div className="tenantnavbar">
            <button
              className="tenantnavbarbutton"
              onClick={() => {
                this.getWorkOrders();
                this.props.history.push("/tenantportal/work_orders");
              }}
            >
              View Your Current Work Orders
            </button>

            <button
              className="tenantnavbarbutton"
              onClick={() => {
                this.props.history.push("/tenantportal/new_work_order");
              }}
            >
              Create New Work Order
            </button>
          </div>

          <Route
            path="/tenantportal/work_orders"
            render={props => {
              return (
                <TenantWorkOrder
                  {...props}
                  workOrders={this.state.workOrders}
                />
              );
            }}
          />

          <Route
            path="/tenantportal/new_work_order"
            render={props => {
              return (
                <TenantCreateNew
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
        </div>
      </div>
    );
  }
}

export default Tenantportal;
