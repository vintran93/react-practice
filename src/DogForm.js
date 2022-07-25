import React, { Component } from "react";

class DogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
    console.log(this.state.name);
  };

  render() {
    return (
      <>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
      </>
    );
  }
}

export default DogForm;