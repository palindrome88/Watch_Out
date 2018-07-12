import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
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
      <Menu fluid widths={3}>
        <Menu.Item name='menu' active={activeItem === 'MENU '} onClick={this.handleItemClick} />
        <Menu.Item name='search' active={activeItem === 'SEARCH'} onClick={this.handleItemClick} />
        <Menu.Item name='profile' active={activeItem === 'PROFILE'} onClick={this.handleItemClick} />
      </Menu>
    );
  }
}

export default App;
