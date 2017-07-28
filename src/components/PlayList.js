import React, { Component } from 'react';
import PlayListItem from './PlayListItem.js';

export default class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    }
  }
  render() {
    return (
      <div>
      <form onSubmit={this.fetchData}><input type="submit" className="btn btn-primary" id="updateButton" value="Update!"/></form>
      <div><PlayListItem songs={this.state.songs}/></div>
      </div>
    )
  }
  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    })
  }
  fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }
}
