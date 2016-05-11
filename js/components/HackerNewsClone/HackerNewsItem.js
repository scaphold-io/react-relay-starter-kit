import React from 'react';
import Relay from 'react-relay';

class HackerNewsItems extends React.Component {
  render() {
    console.log("HackerNewsItem.props");
    console.log(this.props);

    let item = this.props.hnItem.node;
    let time = new Date(item.createdAt);
    time = time.toString();

    return (
      <div>
        <h1><em>{this.props.num + 1}.</em> <a href={item.url}>{item.title}</a></h1>
        <h3>{item.score} points by {item.author.credentials.basic.email}</h3>
        <h5>at {time}</h5>
        <hr />
      </div>
    );
  }
}

export default Relay.createContainer(HackerNewsItems, {
  fragments: {
  },
});
