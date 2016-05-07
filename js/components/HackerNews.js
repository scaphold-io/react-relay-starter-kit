import React from 'react';
import Relay from 'react-relay';

class HackerNews extends React.Component {
  render() {
    console.log("HackerNews.props");
    console.log(this.props);
    // let items = this.props.hnItems.get.map(
    //   (hnItem, idx) => <Item hnItem={hnItem} key={idx} />
    // );
    let item = this.props.hnItems.get;
    
    return (<div><Item hnItem={item} /></div>);
  }
}

export default Relay.createContainer(HackerNews, {
  fragments: {
  },
});

class Item extends React.Component {
  render() {
    let item = this.props.hnItem;
    console.log(item);

    return (
      <div>
        <h1><a href={item.url}>{item.title}</a></h1>
        <h2>{item.score} - {item.createdAt}</h2>
        <hr />
      </div>
    );
  }
};

Item = Relay.createContainer(Item, {
  fragments: {
  },
});