import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import { Router, Route, IndexRoute, applyRouterMiddleware, browserHistory, routes, hashHistory } from 'react-router';
import useRelay from 'react-router-relay';
import config from './../config';

import App from './components/App/App';
import Home from './components/HackerNewsClone/Home';
import GraphiQLModule from './components/GraphiQL/GraphiQL';
import { HomeQueries, prepareHomeParams } from './routes/HomeRoute';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(config.scapholdUrl, {
    headers: {
      Authorization: 'Bearer ' + localStorage.scapholdAuthToken
    }
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
