import React, { Component } from 'react';
import Beer from '../Beer/Beer'; 
import './BeerList.css';


class BeerList extends Component {

  constructor () {
    super();
  }

  mapList = ( beerList ) => {
      return (
        this.props.beerList.map((beer) => {
            return <Beer/>;
        })
      )
  }

  render() {

    return (
      <div className='beer-list-container'>
        
      </div>
    );
  }

}



export default BeerList;
//
// <Beer beer={beer} />
//
//
