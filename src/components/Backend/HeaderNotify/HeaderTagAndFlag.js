import React from 'react';
import {Link} from 'react-router-dom';
import {RouteDefine} from '../../../constants/RoutesDefine';

const fakeData = [
	{
		type: 1,
		taskName: "test1",
		process: 10
	},
    {
        type: 2,
        taskName: "test1",
        process: 30
    },
    {
        type: 3,
        taskName: "test1",
        process: 60
    },
    {
        type: 4,
        taskName: "test1",
        process: 95
    }

];

const RenderTaskItem = (props) => {
    let typeOfTask;
    if(props.data.type === 1)
        typeOfTask = "progress-bar progress-bar-aqua";
    else if (props.data.type === 2)
        typeOfTask = "progress-bar progress-bar-green";
    else if (props.data.type === 3)
        typeOfTask = "progress-bar progress-bar-red";
    else if (props.data.type === 4)
        typeOfTask = "progress-bar progress-bar-yellow";
    else typeOfTask = "progress-bar progress-bar-aqua";
    return(
        <li>
            <a href={null}>
                <h3>
					{props.data.taskName}
                    <small className="pull-right">{props.data.process}%</small>
                </h3>
                <div className="progress xs">
                    <div className={typeOfTask} style={{width: props.data.process + '%'}} role="progressbar" aria-valuenow={props.data.process} aria-valuemin="0" aria-valuemax="100">
                        <span className="sr-only">{props.data.process}% Complete</span>
                    </div>
                </div>
            </a>
        </li>
    )
};

export default class HeaderTagAndFlag extends React.Component {
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
			<li className="dropdown tasks-menu" ref={this.setWrapperRef}>
				<a href={null} onClick={this.UpdateStateNotify.bind(this)} style={{cursor: 'pointer'}}>
					<i className="fa fa-flag-o"/>
					<span className="label label-danger">{fakeData.length}</span>
				</a>
				<ul className="dropdown-menu" style={{display: this.state.isShow ? 'block' : 'none'}}>
					<li className="header">You have {fakeData.length} tasks</li>
					<li>
						<ul className="menu">
							{fakeData.map((e, i) =>
								<RenderTaskItem data={e} key={i}/>
							)}
						</ul>
					</li>
					<li className="footer">
                        <Link to={RouteDefine.AdminSeeAddTask}>View all task</Link>
					</li>
				</ul>
			</li>
		)
	}
}