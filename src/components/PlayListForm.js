import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor() {
    super();

    this.handleNameChange=this.handleNameChange.bind(this);
    this.handleArtistChange=this.handleArtistChange.bind(this);
    this.handleTitleChange=this.handleTitleChange.bind(this);
    this.handleNotesChange=this.handleNotesChange.bind(this);

    this.state = {
      userName: '',
      songTitle: '',
      songArtist: '',
      songNotes: ''
    };
  }

  handleNameChange (e) {
    this.setState({userName: e.target.value})
  }

  handleArtistChange (e) {
    this.setState({songArtist: e.target.value})
  }

  handleTitleChange (e) {
    this.setState({songTitle: e.target.value})
  }

  handleNotesChange (e) {
    this.setState({songNotes: e.target.value})
  }







  addToList = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }
  ).then(response => {
    console.log(response, "song added to API");

  }).catch(err => {
    console.log(err, "something went wrong with the API post");
  });
  this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
}
  render() {
    return (
    <div className="formForPlayList"><form onSubmit={this.addToList}>
    <label htmlFor="userName">Username</label><br /><input type="text" name="userName" onChange={this.handleNameChange} value={this.state.userName}/>
    <br />
    <label htmlFor="songArtist">Artist/Band</label><br /><input type="text" name="songArtist" onChange={this.handleArtistChange} value={this.state.songArtist}/>
    <br />
    <label htmlFor="songTitle">Song Title</label><br /><input type="text" name="songTitle" onChange={this.handleTitleChange} value={this.state.songTitle}/>
    <br />
    <label htmlFor="songNotes">Notes about the song</label><br /><input type="text" name="songNotes" onChange={this.handleNotesChange} value={this.state.songNotes}/>
    <br />
    <input type="submit" className="submitButton" value="submit" />
    </form></div>
    )
  }
}
