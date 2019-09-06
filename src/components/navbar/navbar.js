import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import axios from "axios";

class Navbar extends React.Component {


  handleClick = () => {
    this.props.history.push("/login");
  };

  handleLogout = async () => {
    try {
      
      await axios.get("/logout").then(response=> {
        alert(response.data)
      })
     
this.props.history.push("/")
      
    } catch (error) {
      alert("cannot logout, please close browser");
    }
  };


  render() {
    return (
      <div className="Navbar">
        <Link to="/" className="header" style={{ textDecoration: "none" }}>
          Legacy Apartments
        </Link>

        <div className="navigation">
          <div className="links">
            
          </div>

          <button className="login" onClick={this.handleClick}>
            Login
          </button>
         
            <button className="login" onClick={this.handleLogout}>
              Logout
            </button>
          
        </div>
      </div>
    );
  }
}

export default Navbar;
