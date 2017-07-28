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
        <li className="list-group-item"><div className="userName"><p className="text-success">Username: {songs.userName}</p></div></li>
        <li className="list-group-item"><div className="songArtist"><p className="text-success">Artist: {songs.songArtist}</p></div></li>
        <li className="list-group-item"><div className="songTitle"><p className="text-success">Song Title: {songs.songTitle}</p></div></li>
        <li className="list-group-item"><div className="songNotes"><p className="text-success">Song Notes: {songs.songNotes}</p></div></li>
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
