import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImage } from '../../assets/img/Images';
import './styles.css';
//import { Button, Collapse, Well, Media } from 'react-bootstrap';

class Beer extends Component {

 constructor () {
    super();

    this.state  = {
      isOpen : false,
      img : getImage()
    }
  }

  _showDescription = () => {
    if ( this.props.selectedBeerId === this.props.beer.name  && this.state.isOpen ) {
      return (
        <div className='beer-description-container'>
          <p className='beer-description-title'>DESCRIPTION</p>
          <p className='beer-description'>{this.props.beer.description}</p>
        </div>
      )
    }
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
    this.props.onClick();
  }


  render() {
    return (
      <a className='beer-container' onClick={() => this.handleClick()}>
        <img className='beer-image' src={this.state.img} alt='beer icon'/>
        <div className='beer-info'>
          <p className='beer-name'>{this.props.beer.name}</p>
          <div className='ai-container'>
            <p className='abv'>ABV: {this.props.beer.abv} </p> 
            <p className='ibu'>IBU: {this.props.beer.ibu}</p>
          </div>
          {/* <p className='brewery'>Dogfish Head</p> */}
          <p className='brewery'>{this.props.beer.brewery}</p>
        </div>
        { this._showDescription() }
      </a>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    selectedBeerId : store.selectedBeerId
  }
}

export default connect(mapStateToProps)(Beer);
// <Beer beer={beer} />
