import React, { Component } from "react";
import "./App.css";

import { Route, Link } from "react-router-dom";
import Projects from "./components/Projects/Projects.js";

class App extends Component {
  state = {
    show: false
  };

  handleShow = () => {
    this.setState({ show: !this.state.show });
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
