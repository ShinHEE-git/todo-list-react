import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <form onSubmit={
        (e) => {
          e.preventDefault();
          this.props.onPushContents(e.target[0].value, e.target[1].value);
        }
      }>
        <input type="text" placehorder="title" />
        <input type="text" placeholder="Description" />
        <input type="submit" />
      </form>
    );
  }
}

export default CreateContent