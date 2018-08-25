import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import BeerList from './components/BeerList/BeerList';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Thirsty for Beer?</h1>
        </header>
        <p className="App-intro">
          <code>Durstig nach Bier?</code>
        </p> */}
        <NavBar/>
        <BeerList beerList={this.props.draftList}/>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log('APP STORE ->', store);
  return {
    draftList : store.draftList,
    bottleList : store.bottleList
  }
}

export default connect(mapStateToProps)(App);
