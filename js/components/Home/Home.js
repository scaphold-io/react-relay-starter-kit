import React from 'react';
import Relay from 'react-relay';
import {Button} from 'react-bootstrap';
import {hashHistory} from 'react-router';
import Header from './Header';
import Body from './Body';

class Home extends React.Component {
  render() {
    if (!localStorage.scapholdAuthToken) {
      hashHistory.push('/');
    }

    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default Relay.createContainer(Home, {
  initialVariables: {},
  fragments: {}
});
