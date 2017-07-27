import React, { Component } from 'react';

export default class PlayListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let songInfo = this.props.songs.map((songs, files) => {
      return (
      <div key={files}>
        <li className="list-group-item"><div className="userName">Username: {songs.userName}</div></li>
        <li className="list-group-item"><div className="songArtist">Artist: {songs.songArtist}</div></li>
        <li className="list-group-item"><div className="songTitle">Song Title: {songs.songTitle}</div></li>
        <li className="list-group-item"><div className="songNotes">Song Notes: {songs.songNotes}</div></li>
      </div>
    )
    })

    return (
      <div className="pl-item">
        <ul className="list-group">
        {songInfo}
        </ul>
      </div>
    )
  }
}
