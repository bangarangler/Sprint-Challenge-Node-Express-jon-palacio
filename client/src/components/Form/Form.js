import React from "react";

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

  render() {
    return (
      <React.Fragment>
        <form>
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
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
