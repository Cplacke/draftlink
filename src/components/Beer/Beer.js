import React, { Component } from 'react';
import { getImage } from '../../img/Images';
import './Beer.css';
import { Button, Collapse, Well, Media } from 'react-bootstrap';

class Beer extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      open: true
    };
  }

  /**
   * 
   * <div className="card">
                      <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                          <div className="beer-container">
                              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                  <div className="container color-cont">
                                    <img className='image align-self-center mr-3 icon' src={getImage()} alt='beer icon'/>
                                    <div class="media-body">
                                      <p className='mt-0 mb-1 beer-title beer-name'>{this.props.beer.name}</p>
                                    </ div>
                                  </div>
                              </button>
                              </div>
                          </h5>
                      </div>
                      <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                          <div className="card-body info">
                          <div className=" ai-container">
                            <p className='abv'>ABV: {this.props.beer.abv} </p> 
                            <p className='ibu'>IBU: {this.props.beer.ibu}</p>
                            </div>
                            <p className='brewery beer-words'>{this.props.beer.brewery}</p>
                          </div>
                      </div>
                  </div>
   *   
  /**
   * This was returned from the top
   *<li className="media">
                                          <img />
                                          <div className="media-body">
                                              <h5 className="">Dead and Berried</h5>
                                          </div>
                                      </li>
                TAK THE BOTTOM AS THE IMAGE LINE
                                    <img className='image align-self-center mr-3 icon' src={getImage()} alt='beer icon'/>
   *
   * @returns
   * @memberof Beer
   */
  render() {
    return (
      <Media>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
        <Media.Left align="middle">
          <img width={64} height={64} src={getImage()} alt="thumbnail" />
        </Media.Left>
        <div className="container color-cont">
              <Media.Heading>
            <div class="media-body">
              <p className='mt-0 mb-1 beer-title beer-name'>{this.props.beer.name}</p>
            </ div>
          </Media.Heading>
              </div>
        <Media.Body>
          
          <div>
            <Collapse in={this.state.open}>
              <div>
                <Well>
                  <p className='abv'>ABV: {this.props.beer.abv} </p>
                  <p className='ibu'>IBU: {this.props.beer.ibu}</p>

                  <p className='brewery beer-words'>{this.props.beer.brewery}</p>
                </Well>
              </div>
            </Collapse>
          </div>
        </Media.Body>
        </Button>
      </Media>

    );
  }

}



export default Beer;
//
// <Beer beer={beer} />
//
//
