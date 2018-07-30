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
    for ( let i=0; i < 30; i++ ) {
      beerlist.push(getRandomBeer());
    }
    console.log(beerlist);
    return beerlist;
  }

/**
 * 
      <div id="accordian" className='beer-list-container container-fluid'>
      </div>
 * 
 */
  render() {
    return (
        <ul id="mcm-list" className="list-unstyled list-group">
        {this.mapList()}
          </ul>
    );
  }

}

const mapStateToProps = (store) => {
  return { }
}

export default connect(mapStateToProps)(BeerList);
