import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class NavBar extends Component {
  render() {
    return (

      <nav className="navbar navbar-inverse bg-faded" style={{backgroundColor: "#002744"}}>
        <a className="navbar-brand" href="#">
          <img src={require('./logo.png')} width="30" height="30" style={{marginRight: 10, marginLeft: 10}} className="d-inline-block align-top" alt="" />
          eWaiter.pl
        </a>
      </nav>
    )
  }
}
