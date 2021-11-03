import React, { Component } from 'react';

class Clock extends Component {
  render() {
    return (
      <div>
        {this.props.date}
      </div>
    );
  }
}

export default Clock