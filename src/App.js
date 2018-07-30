import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './libs/adminLTE.min.css';
import './libs/_all-skins.min.css';
import './libs/font-awesome/css/font-awesome.min.css';
import {RouteDefine} from './constants/RoutesDefine';

//Admin Component
import AdminLogin from './containers/AdminLogin';
import AdminDashBoard from "./containers/AdminContainer/DashBoard";


export default class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					{document.querySelector('body').setAttribute('class', 'hold-transition skin-blue sidebar-mini')}
					<Route exact path={RouteDefine.AdminLogin} component={AdminLogin} />
					{RouteDefine.AdminIndexToDashBoard.map((value, i) =>
						<Route path={value} key={i} component={AdminDashBoard} />
					)}
				</Switch>
			</HashRouter>
		)
	}
}