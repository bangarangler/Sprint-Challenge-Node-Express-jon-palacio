import React from "react";

import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let newPost = {
      name: this.state.name,
      description: this.state.description
    };
    axios
      .post("http://localhost:4000/projects", newPost)
      .then(res => {
        this.setState({ name: "", description: "" });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="project name..."
            name="name"
            value={this.state.name}
            required
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="project description..."
            name="description"
            value={this.state.description}
            required
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
