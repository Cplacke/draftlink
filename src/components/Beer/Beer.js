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
          <p className='beer-name'>{this.props.beer.name}</p>
          <div className='ai-container'>
            <p className='abv'>ABV: {this.props.beer.abv} </p> 
            <p className='ibu'>IBU: {this.props.beer.ibu}</p>
          </div>
          {/* <p className='brewery'>Dogfish Head</p> */}
          <p className='brewery'>{this.props.beer.brewery}</p>
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
