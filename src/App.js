import React from 'react';
import './App.css';
import Contents from './components/Contents';
import Clock from './components/Clock';
import ButtonTable from './components/ButtonTable';
import CreateContent from './components/CreateContent'
import Description from './components/Description'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'create',
      date: Date(),
      contents: [], //id: Number, title: String, desc: String
      array_max: 0,
      selected_content_id: null
    };
  }

  getContent() {
    let _array_max, controlbox;
    let _contents = Array.from(this.state.contents)

    if (this.state.mode === 'create') {
      _array_max = 1 + this.state.array_max
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
    } else if (this.state.mode === 'update') {

      controlbox = <CreateContent
        onPushContents={(_title, _desc) => {
          _contents.splice(this.state.selected_content_id, 1, {
            id: this.state.selected_content_id,
            title: _title,
            desc: _desc
          })
          this.setState({
            contents: _contents,
            mode: 'read',
          });
        }}>

      </CreateContent>
    }
    return controlbox;
  }


  deleteContent(_selected_content_id) {
    let i = 0,
      _contents = Array.from(this.state.contents),
      _array_max = this.state.array_max;

    while (i < this.state.array_max) {
      if (_contents[i].id === Number(_selected_content_id)) {
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
        {this.getContent()}
        <Contents
          contents={this.state.contents}
          array_max={this.state.array_max}
          clickContent={(_selected_content_id) => {
            this.setState({ selected_content_id: _selected_content_id })
            console.log(_selected_content_id)
          }}
          deleteContent={(_selected_content_id) => {
            this.deleteContent(_selected_content_id)
          }}
          updateContent={(_selected_content_id) => {
            this.setState({
              mode: 'update',
              selected_content_id: _selected_content_id
            })
          }}
        >
        </Contents>
        <Description
          contents={this.state.contents}
          selected_content_id={this.state.selected_content_id}

        ></Description>

      </div >
    );
  }
}

export default App;
