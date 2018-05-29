import React, { Component } from 'react';
import Images from '../img/Images.js'
import BeerGenerator from '../test/BeerGenerator.js';

import './Beer.css';

class Beer extends Component {

  render() {
    // let image = getImage();
    // console.log(image);
    let images = new Images();
    let img = images.getImage();
    let generator = new BeerGenerator();
    let beer = generator.getRandomBeer();
    console.log(beer);

    return (
      <div className='beer-container'>
          <img className='image' src={img} alt='beer icon'/>
        <div className='info'>
          <p className='beer-name'>{beer.Name}</p>
          <p>{beer.Brewery} &ndash; {beer.City}</p>
          <p>ABV: {beer.Abv}</p>
        </div>
      </div>
    );
  }

  doSomething () {

  }
}



export default Beer;
