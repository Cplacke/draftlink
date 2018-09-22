import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedBeer extends Component {
  

  render () {
    if ( this.props.beer ) {
      const { name, brewery,  abv, ibu, description } = this.props.beer;
      return (
        <div>
          <h1>{name}</h1>
          <h3>{brewery}</h3>
          <div>
            <p>ABV: {abv}</p>
            <p>IBU: {ibu}</p>
            <p>{"New England IPA"}</p>
          </div> 
          <div> 
            <p>
              {description}
            </p>
          </div>
        </div>
      )
    } else {
      return (<h3> nothing selected </h3>)
    }
  }
}

const mapStateToProps = (store) => {
  return {
    beer : store.selectedBeer
  }
}

export default connect(mapStateToProps)(SelectedBeer);