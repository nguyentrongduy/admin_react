import React from 'react';
import Accordion from '../../../libs/TreeMenu/Accordion';
import AccordionItem from '../../../libs/TreeMenu/AccordionItem'
import './style.css';

const fakeData = [
	{
		mainTitle: 'Test main title',
		listMenu: [
			{
				menuTitle: 'title 1',
				listUrl: [
					{
						title: 'link 1',
						url: '/admin/dashboard'
					},
					{
						title: 'link 1',
						url: '/admin/dashboard'
					},
					{
						title: 'link 1',
						url: '/admin/dashboard'
					}
				]
			},
			{
				menuTitle: 'title 2',
				listUrl: [
					{
						title: 'link 1',
						url: '/admin/dashboard'
					},
					{
						title: 'link 1',
						url: '/admin/dashboard'
					},
					{
						title: 'link 1',
						url: '/admin/dashboard'
					}
				]
			}
		]
	},
	{
		mainTitle: 'Test main title',
		listMenu: [
			{
				menuTitle: 'title 1',
				listUrl: [
					{
						title: 'link 1',
						url: '/admin/dashboard'
					},
					{
						title: 'link 1',
						url: '/admin/dashboard'
					},
					{
						title: 'link 1',
						url: '/admin/dashboard'
					}
				]
			},
			{
				menuTitle: 'title 2',
				listUrl: [
					{
						title: 'link 1',
						url: '/admin/dashboard'
					},
					{
						title: 'link 1',
						url: '/admin/dashboard'
					},
					{
						title: 'link 1',
						url: '/admin/dashboard'
					}
				]
			}
		]
	}
];

export default class AdminSideBarMenu extends React.Component {
	render() {
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
						<div className="admin-sideBar-menu">MAIN NAVIGATION</div>
						<AccordionItem title={'test parent'} parentTag={'ul'} expanded={true}>
							<li className="active">
								<a href="/"><i className="fa fa-circle-o"/> Dashboard v1</a>
							</li>
							<li>
								<a href="/"><i className="fa fa-circle-o"/> Dashboard v1</a>
							</li>
							<li>
								<a href="/"><i className="fa fa-circle-o"/> Dashboard v1</a>
							</li>
						</AccordionItem>
						<AccordionItem title={'test parent'} parentTag={'ul'} expanded={true}>
							<li className="active">
								<a href="/"><i className="fa fa-circle-o"/> Dashboard v1</a>
							</li>
							<li>
								<a href="/"><i className="fa fa-circle-o"/> Dashboard v1</a>
							</li>
							<li>
								<a href="/"><i className="fa fa-circle-o"/> Dashboard v1</a>
							</li>
						</AccordionItem>
					</Accordion>
				</section>
			</aside>
		)
	}
}