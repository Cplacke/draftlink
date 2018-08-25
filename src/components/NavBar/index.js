import React, { Component } from 'react';
import cloudsLogo from '../../img/images/clouds-logo.png';
import './NavBar.css';

class NavBar extends Component {

  constructor () {
    super();

    this.state  = {
      links :[
        { label : 'draflist', href : '/brews' },
        { label : 'menu', href : '/grub' },
        { label : 'locations', href : '/locations' },
        { label : 'events', href : '/events' }
      ],
    }
  }

  render() {
    return (
      <nav className="draftlink-navbar row"> 
        <img className="brewery-logo" src={cloudsLogo} />
        <div className="navbar-bar col-sm-10">
          {this.state.links.map( (link) => {
            return <a className="navbar-link" href={link.href}>{link.label}</a>
          })}
        </div>
      </nav>
    );
  }
}

export default NavBar;
