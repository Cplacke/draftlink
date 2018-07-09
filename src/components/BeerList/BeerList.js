import React, { Component } from 'react';
import Beer from '../Beer/Beer'; 
import { getRandomBeer } from '../../test/BeerGenerator';
import './BeerList.css';


class BeerList extends Component {

  constructor () {
    super();
    this.mapList = this.mapList.bind(this);

    this.state = {
      beerList : this.generateList(),
    }
  }

  mapList () {
      return (
        this.state.beerList.map((beer) => {
        return ( <Beer beer={beer}/> );
        })
      )
  }

  generateList () {
    let beerlist = [];
    for ( let i=0; i < 10; i++ ) {
      beerlist.push(getRandomBeer());
    }
    console.log(beerlist);
    return beerlist;
  }

  render() {
    return (
      <div className='beer-list-container'>
        {this.mapList()}
      </div>
    );
  }

}



export default BeerList;
