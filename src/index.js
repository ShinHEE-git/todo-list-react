import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <header>
      <h1>To Do List (with React)</h1>
    </header>
    <div className='content'>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
