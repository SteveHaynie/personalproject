import React from "react";
import "./tenantworkorder.css";
import moment from "moment";

class TenantWorkOrder extends React.Component {
  render() {
    return (
      <div className="tenantworkOrderList">
        {this.props.workOrders.map((workOrder, index) => (
          <div className="tenantworkordercontainer" key={index}>
            <div className="tenantwodate">
              Date Submitted: {moment(workOrder.created_at).format("lll")}
            </div>
            <div className="tenantinformationcontainer">
              <div className="tenantunitandname">
                <p className="tenantunitNumber"> {workOrder.unit_number}</p>
                <p className="tenantName"> {workOrder.tenant_name}</p>
              </div>
              <p className="tenantissue"> {workOrder.issue}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TenantWorkOrder;
