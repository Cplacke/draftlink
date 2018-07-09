import React, { Component } from 'react';
import { getImage } from '../../img/Images';
import './Beer.css';

class Beer extends Component {

  constructor () {
    super();
  }

  render() {
    return (
      <div className='beer-container'>
          <img className='image' src={getImage()} alt='beer icon'/>
        <div className='info'>
          <p className='beer-name'>{this.props.beer.Name}</p>
          <p>{this.props.beer.Brewery} &ndash; {this.props.beer.City}</p>
          <p>ABV: {this.props.beer.Abv}</p>
        </div>
      </div>
    );
  }

}



export default Beer;
//
// <Beer beer={beer} />
//
//
