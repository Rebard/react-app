//polyfills
import 'babel-polyfill';
import 'unfetch/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from 'containers/App';
import './index.css';
import './globalStyles.css';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://booster.games/api/',
  })
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router history={history}>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
