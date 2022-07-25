import React, { Component } from "react";
import {dogs} from "./data.js";
import Dog from './Dog';

class DogList extends Component {

  render() {
    return (
      <div>
      {dogs.map((dog) => (
        <Dog key={dog.id} dog={dog} />
      ))}
      </div>
    )
  }
}

export default DogList;
