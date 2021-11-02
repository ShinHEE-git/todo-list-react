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
    let userbox = null,
      _contents = Array.from(this.state.contents),
      _array_max = 1 + this.state.array_max;

    if (this.state.mode === 'create') {
      userbox = <CreateContent
        onPushContents={(_title, _desc) => {
          _contents.push({
            id: this.state.array_max,
            title: _title,
            desc: _desc,
          })
          this.setState({
            contents: _contents,
            mode: 'create',
            array_max: _array_max
          });

          console.log(this.state.contents);
        }}
      ></CreateContent >
    }


    return userbox;
  }

  render() {

    return (
      <div>
        <h1>To Do List</h1>
        <Clock date={this.state.date}></Clock>
        {/* <ButtonTable></ButtonTable> */}
        <Contents contents={this.state.contents}></Contents>
        {/* <Description></Description> */}
        {this.getContents()}
      </div >
    );
  }
}

export default App;
