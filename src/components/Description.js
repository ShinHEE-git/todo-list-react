import React, { Component } from 'react';

class Description extends Component {
  render() {
    let contents = this.props.contents
    let selected_content_id = this.props.selected_content_id
    let desc
    let i = 0
    while (i <= contents.length) {
      console.log(selected_content_id)
      if (i === Number(selected_content_id)) {
        desc = contents[i].desc
        break;
      }

      i += 1
    }



    return (
      <p>{desc}</p>
    )

  }
}

export default Description