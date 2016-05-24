import React from 'react';
import Relay from 'react-relay';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import config from './../../../config';
import Header from './../App/Header';
import LoggedInHeader from './../HackerNewsClone/Header';

function graphQLFetcher(graphQLParams) {
  return fetch(config.scapholdUrl, {
    method: 'post',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NjYXBob2xkLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1NzI4ZGE0ZmZkMzU5ZmZiNzMxYzYwMjUiLCJhdWQiOiJKdGdmeVpJUTJwSmo5ckk4RTllNjE3aFFjazBSbnhBbiIsImV4cCI6MTQ2MjYyMTYwNCwiaWF0IjoxNDYyNTM1MjA0fQ.v85wIK3KmFqFu6DVlvnTZ4PNaTIGuJ3OYXG2ZNJiC4s'
    },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

class GraphiQLModule extends React.Component {
  render() {
    var header;
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
  // initialVariables: {
  //   input: null
  // },
  fragments: {
    // user: (variables) => {
    //   return Relay.QL`
    //     fragment on UserQuerySet {
    //       get (id: $input) {
    //         id,
    //         credentials {
    //           basic {
    //             email
    //           }
    //         },
    //         createdAt
    //       }
    //     }
    //   `
    // }
  }
});
