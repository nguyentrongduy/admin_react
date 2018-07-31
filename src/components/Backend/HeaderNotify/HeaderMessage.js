import React from 'react';

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
    }
]

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
        this.isDisPlay = 'none';
        this.state = {
            isShow: false
        };
        this.setState();
        this.SetDisPlay();
    }

    UpdateStateMessageNotify() {
        this.state = {...this.state, isShow: !this.state.isShow};
        this.SetDisPlay();
    }

    SetDisPlay() {
        this.isDisPlay = this.state.isShow ? 'block' : 'none';
    }

    render() {
        return(
            <li className="dropdown messages-menu">
                <a href={null} onClick={this.UpdateStateMessageNotify.bind(this)}>
                    <i className="fa fa-envelope-o"/>
                    <span className="label label-success">4</span>
                </a>
                <ul className="dropdown-menu" style={{display: this.isDisPlay}}>
                    <li className="header">You have 4 messages</li>
                    <li>
                        <ul className="menu">
                            {fakeData.map((e, i) => 
                                <RenderMessage message={e} key={i} />
                            )}
                        </ul>
                    </li>
                    <li className="footer"><a href={null}>See All Messages</a></li>
                </ul>
            </li>
        )
    }
}