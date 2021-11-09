import React, { Component } from 'react';

class Contents extends Component {
  render() {
    let contentsList = [];
    let data = this.props.contents
    let i = 0
    while (i < data.length) {
      contentsList.push(
        <li key={data[i].id}>
          <a href="/" id={data[i].id} onClick={(e) => {
            e.preventDefault()
            this.props.clickContent(e.target.id)
          }}>
            {data[i].title}
          </a>
          <input type="button" value="update" id={data[i].id}
            onClick={(e) => {
              this.props.updateContent(e.target.id)
            }} />
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