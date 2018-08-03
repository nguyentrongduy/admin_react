import React from 'react';

export default class HeaderUser extends React.Component {
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
		this.wapperRef = node;
	}

	UpdateStateUserNotify() {
		this.setState({...this.state, isShow: !this.state.isShow});
	}

	handleClickOutSide(event) {
		if (this.wapperRef && !this.wapperRef.contains(event.target))
			if (this.state.isShow)
				this.setState({...this.state, isShow: !this.state.isShow});
	}
	render() {
		return(
			<li className="dropdown user user-menu" ref={this.setWrapperRef}>
				<a href={null} onClick={this.UpdateStateUserNotify.bind(this)} style={{cursor: 'pointer'}}>
					<img src="#" className="user-image" alt="User Image"/>
					<span className="hidden-xs">Alexander Pierce</span>
				</a>
				<ul className="dropdown-menu" style={{display: this.state.isShow ? 'block' : 'none'}}>
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
		)
	}
}