import React from "react";



class Reroute extends React.Component {
    
    handleClick = props => {

  
        this.props.history.push('/login')
      
      }
  render() {
    return (
       
      <div className="Tenantportal">
       <h1 className='reroute'>Please Login</h1>
       <button className = "gotologin" onClick = {this.handleClick}>Login</button>
      
      </div>
    );
  }
}

export default Reroute;