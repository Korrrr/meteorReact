import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Home from './Home.jsx';


export default withTracker( () => {
  return {
    title: 'Home'
  };
})(Home);