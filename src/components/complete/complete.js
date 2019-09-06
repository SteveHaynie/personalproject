import React from "react";
import axios from "axios";
import "./complete.css";

class Complete extends React.Component {
    constructor(props) {
        super(props);
        const workOrder = this.props.workOrders.find(e => e.id === parseInt(this.props.match.params.id))
          console.log(workOrder)

        this.state = {
          
          unitNumber: workOrder.unit_number,
          tenantName: workOrder.tenant_name,
          issue: workOrder.issue,
          user_id: workOrder.user_id,
          created_at: workOrder.created_at,
          notes: ""
         
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
          notes: this.state.notes,
          id: parseInt(this.props.match.params.id),
          created_at: this.state.created_at,
          user_id: this.state.user_id
        };
        axios.put("/complete_work_order", body).then(response => {
          this.setState({
        
            unitNumber: "",
            tenantName: "",
            issue: "",
            notes: ''
            
          });
          alert("Work Order Completed")
          this.props.updateWorkOrders(response.data)
          this.props.history.push('/managementportal/work_orders')
          
        });
      }

     
  render() {
      
    return (
        
        <div className="completecontainer">
        <div className="completebox">
          <h1 className ="completeheader">Complete Work Order</h1>
          <textarea
            className="completetextarea"
            placeholder={this.state.unit_number}
            name="unitNumber"
            type="text"
            value={this.state.unitNumber}
            onChange={this.handleChange}
          /> 
          <textarea
            className="completetextarea"
            placeholder={this.state.tenant_name}
            name="tenantName"
            type="text"
            value={this.state.tenantName}
            onChange={this.handleChange}
          />
          <textarea
            className="completetextarea"
            placeholder={this.state.issue}
            name="issue"
            type="text"
            value={this.state.issue}
            onChange={this.handleChange}
          />
          <textarea
            className="completetextarea"
            placeholder="Action Taken"
            name="notes"
            type="text"
            value={this.state.notes}
            onChange={this.handleChange}
          />
        <div className="completebuttoncontainer">
          <button className ="completesubmitbutton" onClick={this.handleSubmit}>Submit</button>
          <button className ="completesubmitbutton" onClick={() => {this.props.history.push('/managementportal/work_orders')}}>Cancel</button>
          </div>
        </div>
      </div>);
    
    }}

export default Complete;