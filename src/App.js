import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Sidebar from './components/sidebar';

var $ = require("jquery");


class App extends Component {
  state = {
  //   menu: [
  //   {
  //       id: 1,
  //       component: "Basic",
  //       title: "Basic form w/Inverse Data Flow",
  //       route: "/basic",
  //       description: "Looking at two levels of validation. 1. The Form and 2. The authentication procedure. Also, looking at the inverse of data up to the authentication component.",
  //   },
  //   {
  //       id: 2,
  //       component: "Authentication",
  //       title: "Authentication & Validation",
  //       route: "/authentication",
  //       description: "Looking at two levels of validation. 1. The Form and 2. The authentication procedure. Also, looking at the inverse of data up to the authentication component.",
  //   }
  // ]
   

  }
  
  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Sidebar>

        </Sidebar>

      </div>
    );
  }
}

export default App;
