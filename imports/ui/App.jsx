import React, { Component } from 'react';

import Home from './pages/Home';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    ev.preventDefault();

    console.log('click');
  }

  render() {
    return <Home />
  }
}