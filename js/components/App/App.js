import React from 'react';
import Relay from 'react-relay';
import {Row, Col, Button, Jumbotron} from 'react-bootstrap';
import {hashHistory} from 'react-router';
import Header from './Header';
import Hero from './Hero';
import Description from './Description';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (localStorage.scapholdAuthToken) {
      hashHistory.push('/home');
    }

    return (
      <div>
        <Header />
        <Hero />
        <Description />
        <Footer />
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
  }
});
