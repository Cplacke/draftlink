import React, { Component } from 'react';
import Beer from '../Beer/Beer';
import { connect } from 'react-redux'
import { getRandomBeer } from '../../test/BeerGenerator';
import { displayBeerDetail } from '../../actions/userSelectionActions';
import './BeerList.css';


class BeerList extends Component {

  constructor() {
    super();
    this.mapList = this.mapList.bind(this);

    // this.state = {
    //   beerList : this.generateList(),
    // }


  }

  mapList() {
    if (this.props.beerList) {
      return (
        this.props.beerList.map((beer, i) => {
          beer.description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est sit amet facilisis magna.`
          return (<Beer beer={beer} key={i} onClick={() => this.props.dispatch(displayBeerDetail(beer.name))} />);
        })
      )
    }
  }

  generateList() {
    let beerlist = [];
    for (let i = 0; i < 10; i++) {
      beerlist.push(getRandomBeer());
    }
    console.log(beerlist);
    return beerlist;
  }

  render() {
    return (
      <div className='beer-list-container col-sm-4 offset-sm-1'>
        <h4> SELECTED BEER: {this.props.selectedBeerId}</h4>
        {this.mapList()}
      </div>
    );
  }

}

const mapStateToProps = (store) => (
  {
    beerList: store.draftList,
    selectedBeerId: store.selectedBeerId
  } // not maping anything just getting the whole store
)

const mapDispatchToProps = (dispatch) => (
  { dispatch }
)

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
