import React from 'react';
import Relay from 'react-relay';
import HackerNewsItem from './HackerNewsItem';
import {Row, Col} from 'react-bootstrap';

class HackerNewsItems extends React.Component {
  render() {
    console.log("HackerNewsItems.props");
    console.log(this.props);

    let items = this.props.allHackerNewsItems.edges.map(
      (hnItem, idx) => 
        <div key={idx}>
          <HackerNewsItem hnItem={hnItem} num={idx} />
        </div>
    );
    
    return (
      <Row>
        <Col smOffset={2}>
          {items}
        </Col>
      </Row>
    );
  }
}

export default Relay.createContainer(HackerNewsItems, {
  fragments: {
  },
});
