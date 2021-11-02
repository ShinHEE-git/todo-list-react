import React, { Component } from 'react';

class Clock extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.date}</h2>
      </div>
    );
  }
}

export default Clock