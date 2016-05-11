import React from 'react';
import Relay from 'react-relay';
import {Button} from 'react-bootstrap';
import {hashHistory} from 'react-router';
import Header from './Header';
import HackerNewsItems from './HackerNewsItems';

class Home extends React.Component {
  render() {
    console.log("Home.props");
    console.log(this.props);

    if (!localStorage.userToken) {
      hashHistory.push('/');
    }

    return (
      <div>
        <Header />
        <ul>
          <HackerNewsItems allHackerNewsItems={this.props.allHackerNewsItems.allHackerNewsItems} />
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(Home, {
  initialVariables: {
    input: null,
    orderBy: null
  },
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
    // },
    allHackerNewsItems: (variables) => {
      return Relay.QL `
        fragment on Viewer {
          allHackerNewsItems (first: 10, orderBy: $orderBy) {
            edges {
              node {
                id,
                createdAt,
                modifiedAt,
                title,
                score,
                url,
                author {
                  id,
                  credentials {
                    basic {
                      email,
                      password
                    }
                  }
                }
              }
            }
          }
        }
      `
    },
    // hnItems: (variables) => Relay.QL`
    //   fragment on HackerNewsItemQuerySet {
    //     get (id: $hnInput) {
    //       id,
    //       createdAt,
    //       modifiedAt,
    //       title,
    //       score,
    //       url,
    //       author {
    //         id
    //       }
    //     }
    //   }
    // `,
  }
});
