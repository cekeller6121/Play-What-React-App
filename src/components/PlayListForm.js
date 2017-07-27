import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      songTitle: '',
      songArtist: '',
      songNotes: ''
    };
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
    console.log(response, "yay");

  }).catch(err => {
    console.log(err, "boo!");
  });
  this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
}
  render() {
    return (
    <div className="formForPlayList"><form method="post">
    <label htmlFor="userName">Username</label><br /><input type="text" name="userName" />
    <br />
    <label htmlFor="artistBand">Artist/Band</label><br /><input type="text" name="artistBand" />
    <br />
    <label htmlFor="songTitle">Song Title</label><br /><input type="text" name="songTitle" />
    <br />
    <label htmlFor="songNotes">Notes about the song</label><br /><input type="text" name="songNotes" />
    <br />
    <input type="submit" className="submitButton" value="submit" />
    </form></div>
    )
  }
}
