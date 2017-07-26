import React, { Component } from 'react';

export default class PlayListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let songInfo = this.props.songs.map((songs, files) => {
      return (
      <li key={files} className="songInfo">
        <div className="userName">Username: {songs.userName}</div>
        <div className="songArtist">Artist: {songs.songArtist}</div>
        <div className="songTitle">Song Title: {songs.songTitle}</div>
        <div className="songNotes">Song Notes: {songs.songNotes}</div>
      </li>
    )
    })

    return (
      <div className="pl-item">
        <ul className="songInfo">
        {songInfo}
        </ul>
      </div>
    )
  }
}
