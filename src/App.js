import React, { Component } from 'react';
// import './styles/App.css';
import './styles/NewAppCss.css';

import NavBar from './components/NavBar.js';
import PlayList from './components/PlayList.js';
import PlayListForm from './components/PlayListForm.js';

class App extends Component {
  render() {
    return (
      <div>
      <div className="navBar">
        <div><NavBar /></div>
      </div>
      <div className="row">
      <div className="col-4"><PlayListForm /></div>
      <div className="col-7"><PlayList /></div>
      </div>
      </div>
    );
  }
}

export default App;
