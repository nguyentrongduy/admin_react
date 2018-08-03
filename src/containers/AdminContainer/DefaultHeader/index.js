import React from 'react';
import {connect} from 'react-redux';
import {ChangeStateSideBarMenu} from '../../../actions/sideBarMenu';
import HeaderMessage from "../../../components/Backend/HeaderNotify/HeaderMessage";
import HeaderNotify from "../../../components/Backend/HeaderNotify/HeaderNotify";
import HeaderTagAndFlag from "../../../components/Backend/HeaderNotify/HeaderTagAndFlag";
import HeaderUser from "../../../components/Backend/HeaderNotify/HeaderUser";

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
							<HeaderTagAndFlag/>
							<HeaderUser/>
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