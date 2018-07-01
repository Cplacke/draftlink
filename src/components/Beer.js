import React, { Component } from 'react';
import Images from '../img/Images.js'
import BeerGenerator from '../test/BeerGenerator.js';

import './Beer.css';

class Beer extends Component {

  constructor () {
    super();
    this.images = new Images();
    this.generator = new BeerGenerator();

    this.state = {
      beer: this.generator.getRandomBeer(),
      img: this.images
    }
  }

  render() {
    // let image = getImage();
    // console.log(image);
    return (
      <div className='beer-container'>
          <img className='image' src={this.images.getImage()} alt='beer icon'/>
        <div className='info'>
          <p className='beer-name'>{this.state.beer.Name} {this.props.rating}</p>
          <p>{this.state.beer.Brewery} &ndash; {this.state.beer.City}</p>
          <p>ABV: {this.state.beer.Abv}</p>
        </div>
      </div>
    );
  }

}



export default Beer;
