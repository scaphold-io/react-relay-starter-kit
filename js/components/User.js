import React from 'react';
import Relay from 'react-relay';
import HackerNews from './HackerNews';

class User extends React.Component {
  render() {
    console.log("User.props");
    console.log(this.props);
    return (
    	<div>
    		<div>Welcome {this.props.user.get.credentials.basic.email}!</div>
    		<HackerNews hnItems={this.props.hnItems} />
    	</div>
    );
  }
}

export default Relay.createContainer(User, {
  fragments: {
  }
});