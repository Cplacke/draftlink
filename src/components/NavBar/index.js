import React, { Component } from 'react';
import cloudsLogo from '../../assets/img/images/clouds-logo.png';
import './styles.css';

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
        <div className="col-2">
          <img className="brewery-logo" src={cloudsLogo} />
        </div>  
        <div className="nav-col col-10">
          <div className="navbar-bar">
            {this.state.links.map( (link) => {
              return <a className="navbar-link" href={link.href}>{link.label}</a>
            })}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
