import React from 'react';
import AdminHeader from '../DefaultHeader';
import AdminSideBarMenu from '../DefaultSideBarMenu';
import {ChangeStateSideBarMenu} from "../../../actions/sideBarMenu";
import {connect} from 'react-redux';

class HeaderStatic extends React.Component {
	constructor(props) {
		super(props);
	}

	ChangeStateSideMenu() {
		this.props.dispatch(ChangeStateSideBarMenu());
	}

	render() {
		return (
			<div>
				<AdminHeader handleChangeStateSideMenu={this.ChangeStateSideMenu.bind(this)} />
				<AdminSideBarMenu adminSideBarMenu={this.props.adminSideBarMenu} />
				{this.props.children}
			</div>
		)
	}
}

export default connect((state) => {
	return {adminSideBarMenu: state.adminSideBarMenu};
})(HeaderStatic);