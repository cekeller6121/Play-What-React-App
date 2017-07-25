import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar.js';
import PlayList from './components/PlayList.js';
// import PlayListForm from './components/PlayListForm.js';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <div><NavBar /></div>
      </div>
      <div className="Playlist"><PlayList /></div>
      </div>
    );
  }
}

export default App;
