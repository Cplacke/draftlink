import React, { Component } from 'react';
import logo from './logo.svg';
// import straw from './img/beer/srmstraw.png';

import './App.css';
import Beer from './components/Beer.js';

class App extends Component {
  render() {
    this.count();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Thirsty for Beer?</h1>
        </header>
        <p className="App-intro">
          <code>Durstig nach Bier?</code>
        </p>
          <Beer rating={"4"}/>
          <Beer/>
          <Beer/>
          <Beer/>
          <Beer/>
          <Beer/>
          <Beer/>
          <Beer/>
          <Beer/>
          <Beer/>
          <Beer/>

      </div>
    );
  }
   count () {

  }
}



export default App;
