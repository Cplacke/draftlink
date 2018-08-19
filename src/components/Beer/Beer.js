import React, { Component } from 'react';
import { getImage } from '../../img/Images';
import './Beer.css';
//import { Button, Collapse, Well, Media } from 'react-bootstrap';

class Beer extends Component {

 constructor () {
    super();

    this.state  = {
      isOpen : false,
      img : getImage()
    }
  }

  _showDescription = () => {
    if ( this.state.isOpen ) {
      return (
        <div className='beer-description-container'>
          <p className='beer-description-title'>DESCRIPTION</p>
          <p className='beer-description'>{this.props.beer.description}</p>
        </div>
      )
    }
  }

  render() {
    return (
      <a className='beer-container' onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
        <img className='beer-image' src={this.state.img} alt='beer icon'/>
        <div className='beer-info'>
          <p className='beer-name'>{this.props.beer.name}</p>
          <div className='ai-container'>
            <p className='abv'>ABV: {this.props.beer.abv} </p> 
            <p className='ibu'>IBU: {this.props.beer.ibu}</p>
          </div>
          <p className='brewery'>Dogfish Head</p>
          {/* <p className='brewery'>{this.props.beer.brewery}</p> */}
          { this._showDescription() }
        </div>
      </a>
    );
  }

}



export default Beer;
// <Beer beer={beer} />
