import React from 'react';
import {Link} from 'react-router-dom';
import {RouteDefine} from '../../../constants/RoutesDefine';

const fakeData = [
	{
		type: 1,
		content: "hehe"
	},
	{
		type: 2,
		content: "hehe"
	},
	{
		type: 3,
		content: "hehe"
	},
	{
		type: 4,
		content: "hehe"
	},
	{
		type: 5,
		content: "hehe"
	},
	{
		type: 6,
		content: "hehe"
	},
	{
		type: 7,
		content: "hehe"
	}
];

const RenderNotifyItem = (props) => {
	let typeOfNotify;
	if(props.data.type === 1)
		typeOfNotify = "fa fa-users text-aqua";
	else if (props.data.type === 2)
		typeOfNotify = "fa fa-warning text-yellow";
	else if (props.data.type === 3)
		typeOfNotify = "fa fa-users text-red";
	else if (props.data.type === 4)
		typeOfNotify = "fa fa-shopping-cart text-green";
	else if (props.data.type === 5)
		typeOfNotify = "fa fa-user text-red";
	else typeOfNotify = "fa fa-newspaper-o text-aqua";
	return(
		<li>
			<a href={null}>
				<i className={typeOfNotify}/> {props.data.content}
			</a>
		</li>
	)
};

export default class HeaderNotify extends React.Component {
	constructor(props) {
		super(props);
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutSide = this.handleClickOutSide.bind(this);
		this.state = {isShow: false};
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutSide);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutSide);
	}

	setWrapperRef(node) {
		this.wrapperRef = node;
	}

	UpdateStateNotify() {
		this.setState({...this.state, isShow: !this.state.isShow});
	}

	handleClickOutSide(event) {
		if(this.wrapperRef && !this.wrapperRef.contains(event.target)){
			if (this.state.isShow)
				this.setState({...this.state, isShow: !this.state.isShow});
		}
	}

	render() {
		return(
			<li className="dropdown notifications-menu" ref={this.setWrapperRef}>
				<a href={null} onClick={this.UpdateStateNotify.bind(this)} style={{cursor: 'pointer'}}>
					<i className="fa fa-bell-o"/>
					<span className="label label-warning">{fakeData.length}</span>
				</a>
				<ul className="dropdown-menu" style={{display: this.state.isShow ? 'block' : 'none'}}>
					<li className="header">You have {fakeData.length} notifications</li>
					<li>
						<ul className="menu">
							{fakeData.map((e, i) =>
								<RenderNotifyItem data={e} key={i} />
							)}
						</ul>
					</li>
					<li className="footer"><a href={null}>View all</a></li>
				</ul>
			</li>
		)
	}
}
