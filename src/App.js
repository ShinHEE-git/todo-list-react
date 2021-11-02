import React from 'react';
import './App.css';
import Contents from './components/Contents';
import Clock from './components/Clock';
import CreateContent from './components/CreateContent'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'create',
      date: Date(),
      contents: [],
      array_max: 0
    };
  }

  getContents() {
    let userbox = null;
    if (this.state.mode === 'create') {
      // let _contents: Array;
      userbox = <CreateContent /* onPushContents={(title, description) =>
        _contents.push(title: _title,)
        this.setState()}*/
      ></CreateContent >;
    }
    return userbox;
  }

  render() {

    return (
      <div>
        <h1>To Do List</h1>
        <Clock date={this.state.date}></Clock>
        <Contents contents={this.state.contents}></Contents>
        {/* <Description></Description> */}
        {this.getContents()}
      </div >
    );
  }
}

export default App;
