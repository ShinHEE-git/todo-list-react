import React from 'react';
import './App.css';
import Contents from './components/Contents';
import Clock from './components/Clock';
import ButtonTable from './components/ButtonTable';
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



  getContent() {
    let controlbox = null, _array_max = 1 + this.state.array_max;

    if (this.state.mode === 'create') {
      let _contents;
      _contents = Array.from(this.state.contents)

      controlbox = <CreateContent
        onPushContents={(_title, _desc) => {
          _contents.push({
            id: this.state.array_max,
            title: _title,
            desc: _desc,
          })
          this.setState({
            contents: _contents,
            mode: 'read',
            array_max: _array_max
          });
        }}
      ></CreateContent >
    }
    return controlbox;
  }

  deleteContent(selected_content_id) {
    let i = 0,
      _contents = Array.from(this.state.contents),
      _array_max = this.state.array_max;

    while (i < this.state.array_max) {
      if (_contents[i].id === Number(selected_content_id)) {
        _contents.splice(i, 1);
        this.setState({
          contents: _contents,
          array_max: _array_max
        });
        break;
      }
      i += 1
    }

  }


  render() {

    return (
      <div>
        <h1><a href="/" onClick={(e) => {
          e.preventDefault();
          this.setState({ mode: 'read' });
        }}>
          To Do List
        </a></h1>
        <Clock date={this.state.date}></Clock>
        <ButtonTable
          onChangeMode={(modeKey) => { this.setState({ mode: modeKey }) }}>
        </ButtonTable>
        <Contents
          contents={this.state.contents}
          array_max={this.state.array_max}
          deleteContent={(selected_content_id) => { this.deleteContent(selected_content_id) }
          }>
        </Contents>
        {/* <Description></Description> */}
        {this.getContent()}
      </div >
    );
  }
}

export default App;
