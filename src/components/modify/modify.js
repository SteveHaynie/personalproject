import React from "react";
import axios from "axios";
import "./modify.css";
import { withRouter} from 'react-router-dom';

class Modify extends React.Component {
    constructor(props) {
        super(props);
         const workOrder = this.props.workOrders.find(e => e.id === parseInt(this.props.match.params.id))
          

        this.state = {
          
          unitNumber: workOrder.unit_number,
          tenantName: workOrder.tenant_name,
          issue: workOrder.issue
         
        };
       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
       
      }
      



      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      handleSubmit() {
     
        const body = {
          unit: this.state.unitNumber,
          tenant: this.state.tenantName,
          issue: this.state.issue,
          id: parseInt(this.props.match.params.id)
        };
        axios.put("/updateworkorder", body).then(response => {
          this.setState({
        
            unitNumber: "",
            tenantName: "",
            issue: "",
            
          });
          this.props.updateWorkOrders(response.data);
          this.props.history.push("/managementportal/work_orders");
          
        });
      }
      
  render() {
     console.log(this.state, "modify state")
    return (
        
        <div className="modifycontainer">
        <div className="modifybox">
          <h1 className ="modifyheader">Modify Work Order</h1>
          <div className="modifyunitnumber">{this.state.unitNumber}</div>
          <textarea
            className="modifytextarea"
            
            name="tenantName"
            type="text"
            value={this.state.tenantName}
            onChange={this.handleChange}
          />
          <textarea
            className="modifytextarea"
           
            name="issue"
            type="text"
            value={this.state.issue}
            onChange={this.handleChange}
          />
        <div className="modifybuttoncontainer">
          
          <button className ="modifysubmitbutton" onClick={this.handleSubmit}>Submit</button>
         
          
          <button className ="modifysubmitbutton" onClick={() => {this.props.history.push("/managementportal/work_orders")}}>Cancel</button>
          
          </div>
        </div>
      </div>);
    
    }}

export default withRouter(Modify);