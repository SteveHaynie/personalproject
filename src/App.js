import React from "react";
import Navbar from "./components/navbar/navbar.js.js";
import "./App.css";
import "./reset.css";
import Home from "./components/home/home.js.js";
import Login from "./components/login/login.js.js";
import Reroute from "./reroute.js.js";
import Managementportal from "./components/managementportal/Managementportal.js.js";
import axios from "axios";
import Tenantportal from "./components/tenantportal/Tenantportal.js.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      workOrders: {},
      currentUser: {},
      
    };
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    axios.get("/currentuser").then(response => {
      this.setState({
        currentUser: response.data
      });
    });
  }
  updateUser(user) {
    this.setState({ currentUser: user });
  }

  render() {
console.log(this.state.currentUser, "this is current user")
    
    return (
      <div className="App">
        
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                return (
                  <div className="App">
                    <Navbar {...props} />
                    <Home {...props} />
                    
                  </div>
                );
              }}
            />
            <Route
              path="/login"
              render={props => {
                return (
                  <div className="App">
                    <Navbar {...props} />
                    <Login
                      updateUser={this.updateUser}
                      currentUser={this.state.currentUser}
                      {...props}
                    />
                  </div>
                );
              }}
            />
           
            <Route
              path="/tenantportal"
              render={props => {
                if (Object.keys(this.state.currentUser).length !== 0) {
                  return (
                    <div className="App">
                      
                      <Tenantportal
                        currentUser={this.state.currentUser}
                        {...props}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div className="App">
                      <Reroute {...props} />
                    </div>
                  );
                }
              }}
            />

            <Route
              path="/managementportal"
              render={props => {
                if (Object.keys(this.state.currentUser).length !== 0) {
                  return (
                    <div className="App">
                      
                      <Managementportal
                        currentUser={this.state.currentUser}
                        {...props}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div className="App">
                      <Reroute {...props} />
                    </div>
                  );
                }
              }}
            />
           
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
