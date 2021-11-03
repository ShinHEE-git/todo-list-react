import React, { Component } from 'react';

class Contents extends Component {
  render() {
    let contentsList = [];
    let data = this.props.contents
    let i = 0
    while (i < data.length) {
      contentsList.push(
        <li key={data[i].id}>
          <a href="/content/" onClick={(e) => {
            e.preventDefault();
            console.log(e);
          }}>{data[i].title}</a>
        </li>

      )
      i += 1
    }
    return (
      <ul>
        {contentsList}
      </ul >
    );
  }
}

export default Contents