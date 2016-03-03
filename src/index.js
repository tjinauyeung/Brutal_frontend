import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Brutal from './Brutal';
import Building from './Building';
import PageNotFound from './PageNotFound';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Brutal} />
			<Route path="building/:buildingId" component={Building} />
			<Route path="*" component={PageNotFound}/>
		</Route>
	</Router>
), document.getElementById('root'));