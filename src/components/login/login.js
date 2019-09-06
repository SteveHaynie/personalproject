import React from "react";
import "./login.css";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit = async e => {
    e.preventDefault();
    try {
      const body = {
        username: this.state.username,
        password: this.state.password
      };
      await axios.post("/login", body).then(response => {
        this.props.updateUser(response.data.first_name);
        if (response.data.role === "Manager") {
          this.props.history.push("/managementportal");
        } else {
          this.props.history.push("/tenantportal");
        }
      });
    } catch (error) {
      alert("Please enter valid credentials");
    }
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="logincontainer">
        <div className="loginbox">
          <form className="form" onSubmit={this.handleSubmit}>
            
            <input
              autoComplete="off"
              value={this.state.username}
              onChange={this.handleChange}
              className="logininputfield"
              placeholder="username"
              name="username"
              type="text"
            />
            <input
              autoComplete="off"
              value={this.state.password}
              onChange={this.handleChange}
              className="logininputfield"
              placeholder="password"
              name="password"
              type="password"
            />
            <button type="submit" className="loginbutton">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
