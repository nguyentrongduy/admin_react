import React from 'react';
import {Link} from 'react-router-dom';
import {RouteDefine} from '../../../constants/RoutesDefine';

const fakeData = [
    {
        from: 'Nguyen Duy',
        timer: '10 m ago',
        content: 'hello world'
    },
	{
		from: 'Nguyen Nguyen',
		timer: '11 m ago',
		content: 'hello gay'
	},
	{
		from: 'Nguyen Nguyen',
		timer: '11 m ago',
		content: 'hello gay'
	},
	{
		from: 'Nguyen Nguyen',
		timer: '11 m ago',
		content: 'hello gay'
	},
	{
		from: 'Nguyen Nguyen',
		timer: '11 m ago',
		content: 'hello gay'
	}
];

const RenderMessage = (props) => {
    return(
        <li>
            <a href={null}>
                <div className="pull-left">
                    <img src="#" className="img-circle" alt="User Image"/>
                </div>
                <h4>
                    {props.message.from}
                    <small><i className="fa fa-clock-o"/> {props.message.timer}</small>
                </h4>
                <p>{props.message.content}</p>
            </a>
        </li>
    )
};

export default class HeaderMessage extends React.Component {
    constructor(props) {
        super(props);
	    this.setWrapperRef = this.setWrapperRef.bind(this);
	    this.handleClickOutSide = this.handleClickOutSide.bind(this);
        this.state = {isShow: false}
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

    UpdateStateMessageNotify() {
        this.setState({...this.state, isShow: !this.state.isShow});
    }

    handleClickOutSide(event) {
	    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
		    if(this.state.isShow)
		    	this.setState({...this.state, isShow: !this.state.isShow})
	    }
    }

    render() {
        return(
            <li className="dropdown messages-menu" ref={this.setWrapperRef}>
                <a href={null} onClick={this.UpdateStateMessageNotify.bind(this)} style={{cursor: 'pointer'}}>
                    <i className="fa fa-envelope-o"/>
                    <span className="label label-success">{fakeData.length}</span>
                </a>
                <ul className="dropdown-menu" style={{display: this.state.isShow ? 'block' : 'none'}}>
                    <li className="header">You have {fakeData.length} messages</li>
                    <li>
                        <ul className="menu">
                            {fakeData.map((e, i) =>
                                <RenderMessage message={e} key={i} />
                            )}
                        </ul>
                    </li>
                    <li className="footer">
                        <Link to={RouteDefine.AdminSeeAllMessage} >See all messages</Link>
                    </li>
                </ul>
            </li>
        )
    }
}