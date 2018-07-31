import React from 'react';
import {connect} from 'react-redux';
import {ChangeStateSideBarMenu} from '../../../actions/sideBarMenu';
import HeaderMessage from "../../../components/Backend/HeaderNotify/HeaderMessage";
import HeaderNotify from "../../../components/Backend/HeaderNotify/HeaderNotify";

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
							<HeaderNotify/>

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