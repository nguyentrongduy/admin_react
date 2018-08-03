import React from 'react';
import {connect} from 'react-redux';

import Accordion from '../../../libs/TreeMenu/Accordion';
import AccordionItem from '../../../libs/TreeMenu/AccordionItem'
import './style.css';


class AdminSideBarMenu extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		console.log(document);
		let mainHeader = {};
		if(window.innerWidth <= 767){

		}
		else {
			if(this.props.adminSideBarMenu){
				mainHeader.maxWidth = '230px';
				// document.querySelector('.content-wrapper').style.marginLeft = "230px";
				document.querySelector('body').setAttribute('class', 'skin-blue sidebar-mini sidebar-open');
			}
			else {
				mainHeader.maxWidth = '0';
				// document.querySelector('.content-wrapper').style.marginLeft = "0";
				document.querySelector('body').setAttribute('class', 'skin-blue sidebar-mini');
			}
		}
		return (
			<aside className="main-sidebar" style={mainHeader}>
				<section className={this.props.adminSideBarMenu ? 'sidebar cs-fade-in-350' : 'sidebar'}>
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
							<input type="text" className="form-control" placeholder="Search..."/>
							<span className="input-group-btn">
				            <button type="submit" className="btn btn-flat">
					            <i className="fa fa-search"/>
			                </button>
			                </span>
						</div>
					</form>

					<Accordion>
						<div className="admin-sideBar-menu">Login and Access</div>
						<AccordionItem title={'User manager'} isShowContent={this.props.adminSideBarMenu} parentTag={'ul'} expanded={true}>
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
						<AccordionItem title={'Role manager'} isShowContent={this.props.adminSideBarMenu} parentTag={'ul'}>
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
						<AccordionItem title={'Permission manager'} isShowContent={this.props.adminSideBarMenu} parentTag={'ul'}>
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

export default  connect((state) => {
    return {adminSideBarMenu: state.adminSideBarMenu};
})(AdminSideBarMenu)