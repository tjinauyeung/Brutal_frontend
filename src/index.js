import React from 'react';
import ReactDOM from 'react-dom';

import ScrollToTop from './components/ScrollToTop';

import App from './App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ReviewPage from './pages/ReviewPage';
import NotFound from './pages/NotFoundPage';

import './styles/App.scss';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/review/:reviewId" component={ReviewPage} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);
