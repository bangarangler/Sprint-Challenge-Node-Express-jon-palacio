import React from "react";

const project = props => {
  return (
    <React.Fragment>
      <p>{props.proj.name}</p>
      <p>{props.proj.description}</p>
    </React.Fragment>
  );
};

export default project;
