import React from 'react';
import {connect} from 'react-redux';
import {ChangeStateSideBarMenu} from '../../../actions/sideBarMenu';
import HeaderMessage from "../../../components/Backend/HeaderNotify/HeaderMessage";

class AdminHeader extends React.Component {

	constructor(props) {
		super(props);
	}

	changeStateSideBarMenu() {
		console.log(this.props)
		//change state
		if(window.innerWidth <= 767){

		}
		else {
			this.props.dispatch(ChangeStateSideBarMenu());
			if(!this.props.adminSideBarMenu){
				document.querySelector('aside.main-sidebar').style.maxWidth = '230px';
				document.querySelector('.content-wrapper').style.marginLeft = "230px";
				document.querySelector('body').setAttribute('class', 'skin-blue sidebar-mini sidebar-open');
			}
			else {
				document.querySelector('aside.main-sidebar').style.maxWidth = '0';
				document.querySelector('.content-wrapper').style.marginLeft = "0";
				document.querySelector('body').setAttribute('class', 'skin-blue sidebar-mini');
			}
		}
	}

	render() {
		return (
			<header className="main-header">

				<nav className="navbar navbar-static-top">
					<a href={null} onClick={this.changeStateSideBarMenu.bind(this)} className="sidebar-toggle" role="button">
						<span className="sr-only">Toggle navigation</span>
					</a>
					<div className="navbar-custom-menu">
						<ul className="nav navbar-nav">
							<HeaderMessage/>
							<li className="dropdown notifications-menu">
								<a href={null} className="dropdown-toggle" data-toggle="dropdown">
									<i className="fa fa-bell-o"/>
									<span className="label label-warning">10</span>
								</a>
								<ul className="dropdown-menu">
									<li className="header">You have 10 notifications</li>
									<li>
										<ul className="menu">
											<li>
												<a href={null}>
													<i className="fa fa-users text-aqua"/> 5 new members joined today
												</a>
											</li>
											<li>
												<a href={null}>
													<i className="fa fa-warning text-yellow"/> Very long description
													here that may not fit into the
													page and may cause design problems
												</a>
											</li>
											<li>
												<a href={null}>
													<i className="fa fa-users text-red"/> 5 new members joined
												</a>
											</li>
											<li>
												<a href={null}>
													<i className="fa fa-shopping-cart text-green"/> 25 sales made
												</a>
											</li>
											<li>
												<a href={null}>
													<i className="fa fa-user text-red"/> You changed your username
												</a>
											</li>
										</ul>
									</li>
									<li className="footer"><a href={null}>View all</a></li>
								</ul>
							</li>
							<li className="dropdown tasks-menu">
								<a href={null} className="dropdown-toggle" data-toggle="dropdown">
									<i className="fa fa-flag-o"/>
									<span className="label label-danger">9</span>
								</a>
								<ul className="dropdown-menu">
									<li className="header">You have 9 tasks</li>
									<li>
										<ul className="menu">
											<li>
												<a href={null}>
													<h3>
														Design some buttons
														<small className="pull-right">20%</small>
													</h3>
													<div className="progress xs">
														<div className="progress-bar progress-bar-aqua" style={{width: '20%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
															<span className="sr-only">20% Complete</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href={null}>
													<h3>
														Create a nice theme
														<small className="pull-right">40%</small>
													</h3>
													<div className="progress xs">
														<div className="progress-bar progress-bar-green" style={{width: '40%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
															<span className="sr-only">40% Complete</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href={null}>
													<h3>
														Some task I need to do
														<small className="pull-right">60%</small>
													</h3>
													<div className="progress xs">
														<div className="progress-bar progress-bar-red" style={{width: '60%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
															<span className="sr-only">60% Complete</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href={null}>
													<h3>
														Make beautiful transitions
														<small className="pull-right">80%</small>
													</h3>
													<div className="progress xs">
														<div className="progress-bar progress-bar-yellow" style={{width: '80%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
															<span className="sr-only">80% Complete</span>
														</div>
													</div>
												</a>
											</li>
										</ul>
									</li>
									<li className="footer">
										<a href={null}>View all tasks</a>
									</li>
								</ul>
							</li>
							<li className="dropdown user user-menu">
								<a href={null} className="dropdown-toggle" data-toggle="dropdown">
									<img src="#" className="user-image" alt="User Image"/>
										<span className="hidden-xs">Alexander Pierce</span>
								</a>
								<ul className="dropdown-menu">
									<li className="user-header">
										<img src="#" className="img-circle" alt="User Image"/>
											<p>
												Alexander Pierce - Web Developer
												<small>Member since Nov. 2012</small>
											</p>
									</li>
									<li className="user-body">
										<div className="row">
											<div className="col-xs-4 text-center">
												<a href={null}>Followers</a>
											</div>
											<div className="col-xs-4 text-center">
												<a href={null}>Sales</a>
											</div>
											<div className="col-xs-4 text-center">
												<a href={null}>Friends</a>
											</div>
										</div>
									</li>
									<li className="user-footer">
										<div className="pull-left">
											<a href={null} className="btn btn-default btn-flat">Profile</a>
										</div>
										<div className="pull-right">
											<a href={null} className="btn btn-default btn-flat">Sign out</a>
										</div>
									</li>
								</ul>
							</li>
							<li>
								<a href={null} data-toggle="control-sidebar">
									<i className="fa fa-gears"/>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		)
	}
}

export default connect((state) => {
	return {adminSideBarMenu: state.adminSideBarMenu}
})(AdminHeader)