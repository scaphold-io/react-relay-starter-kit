import React from 'react';
import Relay from 'react-relay';
import { hashHistory } from 'react-router';
import { NavItem } from 'react-bootstrap';

class Logout extends React.Component {

  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    localStorage.clear();
    hashHistory.push('/');
  }

  render() {
    return (
      <NavItem onClick={this.logoutUser}>Logout</NavItem>
    );
  }
}

export default Relay.createContainer(Logout, {
  fragments: {
  }
});
