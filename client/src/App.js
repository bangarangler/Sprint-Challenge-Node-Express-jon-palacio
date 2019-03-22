import React, { Component } from "react";
import "./App.css";

import { Route, Link } from "react-router-dom";
import Projects from "./components/Projects/Projects.js";
import Form from "./components/Form/Form.js";

class App extends Component {
  state = {
    show: false,
    showForm: false
  };

  handleShow = () => {
    this.setState({ show: !this.state.show });
  };

  handleForm = () => {
    this.setState({ showForm: !this.state.showForm });
    let form = null;
    if (this.state.showForm) {
      return (form = (
        <Route
          pathname="/form"
          render={props => {
            return <Form />;
          }}
        />
      ));
    } else {
      return (
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link onClick={this.handleShow} to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link onClick={this.handleForm} to="/form">
                  Add Project
                </Link>
              </li>
            </ul>
          </nav>
          <h1>Welcome to Front End</h1>
          {form}
        </div>
      );
    }
  };

  render() {
    let proj = null;
    if (this.state.show) {
      return (proj = (
        <Route
          pathname="/projects"
          render={props => {
            return <Projects />;
          }}
        />
      ));
    } else {
      return (
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link onClick={this.handleShow} to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link onClick={this.handleForm} to="/form">
                  Add Project
                </Link>
              </li>
            </ul>
          </nav>
          <h1>Welcome to Front End</h1>
          {proj}
        </div>
      );
    }
  }
}

export default App;
