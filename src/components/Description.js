import React, { Component } from 'react';

class Description extends Component {
  render() {

    let desc
    let i = 0
    while (i < this.props.contents.length) {
      let data = this.props.contents[i]
      if (data.id === Number(this.props.selected_content_id)) {
        desc = data.desc
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