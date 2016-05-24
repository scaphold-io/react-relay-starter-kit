import React from 'react';
import Relay from 'react-relay';

class HackerNewsItem extends React.Component {
  render() {
    let item = this.props.hnItem.node;
    let time = new Date(item.createdAt);
    time = time.toString();
    let mailto = "mailto:" + item.author.credentials.basic.email;

    return (
      <div>
        <h1><em>{this.props.num + 1}.</em> <a href={item.url}>{item.title}</a></h1>
        <h3>{item.score} points by <a href={mailto}>{item.author.credentials.basic.email}</a></h3>
        <h5>at {time}</h5>
        <hr />
      </div>
    );
  }
}

export default Relay.createContainer(HackerNewsItem, {
  fragments: {
  },
});
