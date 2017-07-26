import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
    <div className="formForPlayList"><form>
    <label htmlFor="username">Username</label><br /><input type="text" name="username" />
    <br />
    <label htmlFor="artistBand">Artist/Band</label><br /><input type="text" name="artistBand" />
    <br />
    <label htmlFor="songTitle">Song Title</label><br /><input type="text" name="songTitle" />
    <br />
    <label htmlFor="songNotes">Notes about the song</label><br /><input type="text" name="songNotes" />
    <br />
    <input type="submit" className="submitButton" />
    </form></div>
    )
  }
}
