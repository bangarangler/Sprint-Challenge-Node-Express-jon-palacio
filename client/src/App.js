import React, { Component } from "react";
import "./App.css";

import Projects from "./components/Projects/Projects.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Projects />
      </div>
    );
  }
}

export default App;
