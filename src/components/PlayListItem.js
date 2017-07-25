import React, { Component } from 'react';

export default class PlayListItem extends Component {
  render() {
    return (
      <div className="pl-item">
      <div>{this.props.songs.userName}</div>
      <div>songArtist</div>
      <div>songTitle</div>
      <div>songNotes</div>
      </div>
    )
  }
}
