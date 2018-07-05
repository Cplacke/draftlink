import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
// import Beer from './components/Beer/Beer';
import BeerList from './components/BeerList/BeerList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Thirsty for Beer?</h1>
        </header>
        <p className="App-intro">
          <code>Durstig nach Bier?</code>
        </p>
          <BeerList />
      </div>
    );
  }
}



export default App;
