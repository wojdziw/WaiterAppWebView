import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse" style={{backgroundColor: "#0182AC"}}>
        <a className="navbar-brand" href="#">Fancy Restaurant by eWaiter.pl</a>
      </nav>
    )
  }
}
