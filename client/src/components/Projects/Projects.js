import React from "react";

import axios from "axios";

import Project from "../Project/Project.js";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/projects")
      .then(res => {
        console.log(res);
        this.setState({ projects: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.projects.map(proj => {
          return <Project key={proj.id} proj={proj} />;
        })}
      </div>
    );
  }
}

export default Projects;
