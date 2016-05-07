import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import { Router, Route, IndexRoute, applyRouterMiddleware, browserHistory, routes, hashHistory } from 'react-router';
import useRelay from 'react-router-relay';
import config from '../config';

import App from './components/App';
import Login from './components/Login';
import Home from './components/Home';
import GraphiQLModule from './components/GraphiQL';
import { HomeQueries, prepareHomeParams } from './routes/HomeRoute';

// Pull from storage somehow. However react/relay does this.
// console.log("config");
// console.log(config);
Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(config.scapholdUrl, {
    headers: {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NjYXBob2xkLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1NzI4ZGE0ZmZkMzU5ZmZiNzMxYzYwMjUiLCJhdWQiOiJKdGdmeVpJUTJwSmo5ckk4RTllNjE3aFFjazBSbnhBbiIsImV4cCI6MTQ2MjYyMTYwNCwiaWF0IjoxNDYyNTM1MjA0fQ.v85wIK3KmFqFu6DVlvnTZ4PNaTIGuJ3OYXG2ZNJiC4s'
    },
  })
);

ReactDOM.render(
  <Router
    history={hashHistory}
    render={applyRouterMiddleware(useRelay)}
    routes={routes}
    environment={Relay.Store}
  >
    <Route path="/" component={App} />
    <Route path="/home" component={Home}
    	queries={HomeQueries} prepareParams={prepareHomeParams} />
    <Route path="/graphiql" component={GraphiQLModule} />
  </Router>,
  document.getElementById('root')
);
