import React, { Component } from 'react';
import { connect } from 'react-redux'
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
        this.state.beerList.map((beer, i) => {
          beer.description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est sit amet facilisis magna.`
        return ( <Beer beer={beer} key={i}/> );
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
      <div className='beer-list-container col-sm-4 offset-sm-1'>
        {this.mapList()}
      </div>
    );
  }

}

const mapStateToProps = (store) => {
  return { }
}

export default connect(mapStateToProps)(BeerList);
