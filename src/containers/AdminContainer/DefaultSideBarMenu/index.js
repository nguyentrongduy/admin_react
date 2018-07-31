import React from 'react';
import {connect} from 'react-redux';
import {ChangeStatePageLoading} from '../../../actions/pageLoading';

import Accordion from '../../../libs/TreeMenu/Accordion';
import AccordionItem from '../../../libs/TreeMenu/AccordionItem'
import './style.css';


class AdminSideBarMenu extends React.Component {
	changePageLoading() {
		this.props.dispatch(ChangeStatePageLoading());
	}
	
	render() {
		console.log(this.props);
		return (
			<aside className="main-sidebar">
				<section className="sidebar">
					<div className="user-panel">
						<div className="pull-left image">
							<img src="#" className="img-circle" alt="User Image"/>
						</div>
						<div className="pull-left info">
							<p>Alexander Pierce</p>
							<a href={null}><i className="fa fa-circle text-success"/> Online</a>
						</div>
					</div>
					<form action={null} method="get" className="sidebar-form">
						<div className="input-group">
							<input type="text" name="q" className="form-control" placeholder="Search..."/>
							<span className="input-group-btn">
				            <button type="submit" name="search" id="search-btn" className="btn btn-flat">
					            <i className="fa fa-search"/>
			                </button>
			                </span>
						</div>
					</form>

					<Accordion>
						<div className="admin-sideBar-menu">Login and Access</div>
						<AccordionItem title={'User manager'} parentTag={'ul'} expanded={true}>
							<li className="active">
								<a href={null}><i className="fa fa-circle-o"/> Danh sách người dùng</a>
							</li>
							<li>
								<a href={null}><i className="fa fa-circle-o"/> Dashboard v1</a>
							</li>
							<li>
								<a href={null}><i className="fa fa-circle-o"/> Dashboard v1</a>
							</li>
						</AccordionItem>
						<AccordionItem title={'Role manager'} parentTag={'ul'}>
							<li className="active">
								<a href={null}><i className="fa fa-circle-o"/> Dashboard v1</a>
							</li>
							<li>
								<a href={null}><i className="fa fa-circle-o"/> Dashboard v1</a>
							</li>
							<li>
								<a href={null}><i className="fa fa-circle-o"/> Dashboard v1</a>
							</li>
						</AccordionItem>
						<AccordionItem title={'Permission manager'} parentTag={'ul'}>
							<li className="active">
								<a href={null}><i className="fa fa-circle-o"/> Dashboard v1</a>
							</li>
							<li>
								<a href={null}><i className="fa fa-circle-o"/> Dashboard v1</a>
							</li>
							<li>
								<a href={null}><i className="fa fa-circle-o"/> Dashboard v1</a>
							</li>
						</AccordionItem>
					</Accordion>
				</section>
			</aside>
		)
	}
}

export default connect((state) => {
	return {pageLoading: state.pageLoading}
})(AdminSideBarMenu)