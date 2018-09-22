import React, { Component } from 'react';
import BeerList from '../../components/BeerList'
import SelectedBeer from '../../components/SelectedBeer';


class DraftView extends Component {

  render() {
    return (
      <div className="draft-view-container row">
        <div className="col-4 offset-sm-1">
          <BeerList/>
        </div>
        <div className="col-5">
          <SelectedBeer/>
        </div>
      </div>
    )
  }
}

export default DraftView;