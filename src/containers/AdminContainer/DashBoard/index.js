import React from 'react';
import AdminHeader from "../DefaultHeader";
import AdminSideBarMenu from "../DefaultSideBarMenu";

export default class AdminDashBoard extends React.Component {
	render() {
		return (
			<div>
				<AdminHeader/>
				<AdminSideBarMenu/>
			</div>
		)
	}
}