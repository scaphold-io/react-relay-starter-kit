import React from 'react';
import Relay from 'react-relay';
import {Row, Col, Button, Jumbotron} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Hero extends React.Component {
  render() {
    return (
      <Row>
        <Col smOffset={2} sm={8}>
          <Jumbotron style={styles.jumbotron}>
            <h1>Welcome!</h1>
            <p>Here you'll find Scaphold.io's Boilerplate React-Relay template :)</p>
            <p><Button bsStyle="primary" bsSize="large" target="_blank" href="https://scaphold.io">Learn more <FontAwesome name="check" /></Button></p>
            <p>Join our <a href="https://scapholdslackin.herokuapp.com/" target="_blank">Slack community</a>!</p>
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}

export default Relay.createContainer(Hero, {
  fragments: {
  }
});

const styles = {
  jumbotron: {
    marginTop: 20,
    borderRadius: 10,
    textAlign: 'center'
  }
};
