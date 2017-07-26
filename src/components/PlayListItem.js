import React, { Component } from 'react';

export default class PlayListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let songInfo = this.props.songs.map((songs, files) => {
      <li key={files} className="songInfo">
        <div>{songs.userName}</div>
        <div>{songs.songArtist}</div>
        <div>{songs.songTitle}</div>
        <div>{songs.songNotes}</div>
      </li>
    }
  )
    return (
      <div className="pl-item">
        <ul>
        {songInfo}
        </ul>
      </div>
    )
  }
}
