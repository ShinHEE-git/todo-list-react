import React, { Component } from 'react';

class ButtonTable extends Component {
  render() {
    return (
      <div>
        <input type="button" value="추가"
          onClick={() => { this.props.onChangeMode('create') }} />
        <input type="button" value="수정"
          onClick={() => { this.props.onChangeMode('update') }} />
        <input type="button" value="삭제"
          onClick={() => { this.props.onChangeMode('delete') }} />
      </div>
    );
  }
}

export default ButtonTable