import React, { Component } from 'react';

class Contents extends Component {
  render() {
    let contentsList = [];
    let data = this.props.contents
    let i = 0
    while (i < data.length) {
      contentsList.push(
        <li key={data[i].id}>
          {data[i].title}
          <input type="button" value="edit" id={data[i].id} onClick={(e) => { }} />
          <input type="button" value="X" id={data[i].id}
            onClick={(e) => {
              this.props.deleteContent(e.target.id)
            }} />
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