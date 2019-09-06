import React from "react";
import "./tenantcreatenew.css";

class CreateNew extends React.Component {
  render() {
    return (
      <div className="tenantcreatenewcontainer">
        <div className="tenantcreatecontainer">
          <h1 className ="tenantcreateheader">Create New Work Order</h1>
          
         
          <input
           autoComplete="off"
            className="tenantcreateinput"
            placeholder="Description of problem"
            name="issue"
            type="text"
            value={this.props.issue}
            onChange={this.props.handleChange}
          />
          <div className="tenantcreatebuttoncontainer">
            
              <button className="tenantsubmitbutton" onClick={this.props.handleSubmit}>
                Submit
              </button>
            
           
              <button className="tenantsubmitbutton" onClick={() => {
                this.props.history.push("/tenantportal");
              }}>
                Cancel
              </button>
            
          </div>
          <p className ="tenantcreatedisclaimer">
            Notice: Submitting this work order is deemed an authorization to
            enter your apartment and review and potentially repair the problem
            reported. Upon receipt of this request, an employee of Legacy
            Apartments has authority to enter your residence to review and
            potentially repair the problem.{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default CreateNew;
