import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainPage from './components/MainPage';
import BuildingPage from './components/BuildingPage';
import PageNotFound from './PageNotFound';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
	<Router onChange={() => window.scrollTo(0, 0)} history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={MainPage} />
			<Route path="building/:buildingId" component={BuildingPage} />
			<Route path="*" component={PageNotFound}/>
		</Route>
	</Router>
), document.getElementById('root'));