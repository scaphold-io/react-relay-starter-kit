import React from 'react';
import Relay from 'react-relay';
import {Button} from 'react-bootstrap';
import Login from './Login';

class App extends React.Component {
  render() {
    console.log("App.props");
    console.log(this.props);
    return (
      <div>
        <h1>Welcome!</h1>
        <h5>Here you'll find Scaphold.io's Boilerplate React-Relay template :)</h5>
        <hr />
        <Login user={null}/>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
  }
});