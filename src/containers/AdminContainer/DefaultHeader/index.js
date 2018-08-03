import React from 'react';
import {connect} from 'react-redux';
import {ChangeStateSideBarMenu} from '../../../actions/sideBarMenu';
import HeaderMessage from "../../../components/Backend/HeaderNotify/HeaderMessage";
import HeaderNotify from "../../../components/Backend/HeaderNotify/HeaderNotify";
import HeaderTagAndFlag from "../../../components/Backend/HeaderNotify/HeaderTagAndFlag";
import HeaderUser from "../../../components/Backend/HeaderNotify/HeaderUser";

export default class AdminHeader extends React.Component {

	constructor(props) {
		super(props);
	}

	changeStateSideBarMenu() {
		const {handleChangeStateSideMenu} = this.props;
		handleChangeStateSideMenu();
	}

	render() {
		return (
			<header className="main-header">

				<nav className="navbar navbar-static-top">
					<a href={null} onClick={this.changeStateSideBarMenu.bind(this)} className="sidebar-toggle" role="button"/>
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