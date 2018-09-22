import React, { Component } from 'react';
import Beer from '../Beer/index'; 
import { connect } from 'react-redux'
import { getRandomBeer } from '../../test/BeerGenerator';
import { displayBeerDetail } from '../../actions/userSelectionActions';
import './styles.css';

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
          return ( <Beer beer={beer} key={i} onClick={() => this.props.dispatch(displayBeerDetail(beer))}/> );
        })
      )
  }

  generateList () {
    let beerList = [];
    for ( let i=0; i < 10; i++ ) {
      beerList.push(getRandomBeer());
    }
    console.log(beerList);
    return beerList;
  }

  render() {//col-sm-4 offset-sm-1
    return (
      <div className='beer-list-container '>
        {this.mapList()}
      </div>
    );
  }

}

const mapStateToProps = (store) => (
  { store } // not mapping anything just getting the whole store
)

const mapDispatchToProps = (dispatch) => (
  { dispatch }
)

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
