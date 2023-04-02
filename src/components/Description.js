import React, { Component } from 'react'

export default class Description extends Component {
  render() {
    return (
      <div>
          <p>{this.props.description}</p>      
      </div>
    )
  }
}
