import React from 'react';
import Relay from 'react-relay';
import {Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Footer extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <p style={styles.footer}>Made with <FontAwesome name='heart'/> from the Scaphold team</p>
        </Col>
      </Row>
    );
  }
}

export default Relay.createContainer(Footer, {
  fragments: {
  }
});

const styles = {
  footer: {
    textAlign: 'center',
    paddingTop: 19,
    color: '#777',
    borderTop: '1px, solid, #e5e5e5'
  }
};
