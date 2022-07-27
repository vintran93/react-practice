import React, { Component } from 'react'

export default class Cat extends Component {

  constructor(){
    super()
    this.state = {
      counter: 0
    }
  }
  
  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render(){
    return (
      <div key={this.props.cat.id}>
        {this.props.cat.name} - {this.props.cat.breed} - &nbsp;Likes:&nbsp;
        <button onClick={this.handleClick}>{this.state.counter}</button>
      </div>
    )
  }
}
