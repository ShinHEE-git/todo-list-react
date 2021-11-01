import React from 'react';
import './App.css';
import Contents from './components/Contents';
import Clock from './components/Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <Clock data={this.state.date}></Clock>
        <Contents></Contents>
        {/* <Description></Description> */}
      </div>
    );
  }
}

export default App;
