import React, { Component } from 'react'
import { cats } from './data';
import Cat from './Cat';

class CatList extends Component {

  render(){
    return(
      <div>
        {cats.map((cat) => (
          <Cat key={cat.id} cat={cat} />
        ))}
      </div>
    )
  }
}

export default CatList;