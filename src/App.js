import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    whatsthis: "you know what this is",
    bitchitworks: "took long enough!"

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       </div>
    );
  }
}

export default App;
