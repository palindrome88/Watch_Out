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
      <div>
      <button class="ui button">Follow</button>
      </div>
    );
  }
}

export default App;
