import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Home extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
export default Home;
