import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import DraftView from './scenes/DraftView';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <DraftView/>
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
