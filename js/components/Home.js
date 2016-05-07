import React from 'react';
import Relay from 'react-relay';
import {Button} from 'react-bootstrap';
import User from './User';

class Home extends React.Component {
  render() {
    console.log("Home.props");
    console.log(this.props);
    return (
      <div>
        <h1>Hacker News Clone</h1>
        <ul>
          <User user={this.props.user} hnItems={this.props.hnItems} />
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(Home, {
  initialVariables: {
    input: null,
    hnInput: null
  },
  fragments: {
    user: (variables) => {
      return Relay.QL`
        fragment on UserQuerySet {
          get (id: $input) {
            id,
            credentials {
              basic {
                email
              }
            },
            createdAt
          }
        }
      `
    },
    hnItems: (variables) => Relay.QL`
      fragment on HackerNewsItemQuerySet {
        get (id: $hnInput) {
          id,
          createdAt,
          modifiedAt,
          title,
          score,
          url,
          author {
            id
          }
        }
      }
    `,
  }
});