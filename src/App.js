import React, { Component } from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './libs/adminLTE.min.css';

//Admin Component
import AdminLogin from './containers/AdminLogin';


export default class App extends Component {
	render() {
		console.log(this.props);
		return (
			<HashRouter>
				<Switch>
					<Route exact path={'/admin/login'} component={AdminLogin} />
				</Switch>
			</HashRouter>
		)
	}
}