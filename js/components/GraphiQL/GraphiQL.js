import React from 'react';
import Relay from 'react-relay';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import config from './../../../config';
import Header from './../App/Header';
import LoggedInHeader from './../Home/Header';

function graphQLFetcher(graphQLParams) {
  return fetch(config.scapholdUrl, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.scapholdAuthToken}`
    },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

class GraphiQLModule extends React.Component {
  render() {
    let header;
    if (!localStorage.scapholdAuthToken) {
      header = <Header />;
    }
    else {
      header = <LoggedInHeader />;
    }

    return (
      <span>
        {header}
        <GraphiQL fetcher={graphQLFetcher} />
      </span>
    )
  }
}

export default Relay.createContainer(GraphiQLModule, {
  initialVariables: {},
  fragments: {}
});
