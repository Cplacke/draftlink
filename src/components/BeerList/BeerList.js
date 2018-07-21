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
        return ( <Beer beer={beer} key={i}/> );
        })
      )
  }

  generateList () {
    let beerlist = [];
    for ( let i=0; i < 20; i++ ) {
      beerlist.push(getRandomBeer());
    }
    console.log(beerlist);
    return beerlist;
  }

/**
 * 
 * 
 */
  render() {
    return (
      <div id="accordian" className='beer-list-container container-fluid'>
        <ul className="list-unstyled list-group">
        {this.mapList()}
          </ul>
      </div>
    );
  }

}

const mapStateToProps = (store) => {
  return { }
}

export default connect(mapStateToProps)(BeerList);
