import React, { Component } from "react";

class Dog extends Component {
    
  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div key={this.props.dog.id}>
        {this.props.dog.name}
        <button onClick={this.handleClick}>{this.state.counter}</button>
      </div>
    )
  }
}

export default Dog;