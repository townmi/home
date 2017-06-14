import React, { Component } from 'react';
import { IndexLink, Link, withRouter, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import Avator from '../Avator';
import CTABar from '../CTABar';
import './message.scss';

const defaultProfile = {
    avator: "http://www.wangmingdaquan.cc/tx61/66.jpg",
    username: "towne",
    date: "2017-10-8"
};
const defaultMessage = {
    description: "呃呃呃～算是吧～",
    pictures: [
        "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg"
    ]
};

class Message extends Component {
    constructor(props) {
        super(props);
        this.go = this.go.bind(this);
    }

    componentWillMount() {
        const { profile, message } = this.props;

        this.setState({
            profile: profile ? profile : defaultProfile,
            message: message ? message : defaultMessage
        })
    }
    componentWillReceiveProps(nextProps) {
        const { profile, message } = this.props;
        this.setState({
            profile: profile ? profile : defaultProfile,
            message: message ? message : defaultMessage
        })
    }
    go (event, router) {
        console.log(this);
        console.log(event, router);
        if(router) {
        }
    }
    render() {
        const { route } = this.props;
        const { profile, message } = this.state;
        let picturesList = "";
        if (message.pictures.length === 1) {
            picturesList = (
                <img src={message.pictures[0]} alt="" />
            );
        } else if (message.pictures.length > 1) {
            picturesList = message.pictures.map((cell, index) => {
                return (
                    <div className="img-single" key={index} style={{ backgroundImage: `url(${cell})` }}>
                    </div>
                )
            });
        }
        return (
            <div className="card-message">
                <div className="card-message-top">
                    <Avator profile={profile} showFollow={true} model={"default"} />
                </div>
                {
                    route && route.name === "message" ?
                        <div className="card-message-content">
                            <h4>{message.description}</h4>
                            {
                                message.pictures.length > 1 ?
                                    <div className="imgs">
                                        {picturesList}
                                    </div>
                                    :
                                    <p className="img-single">
                                        {picturesList}
                                    </p>
                            }
                        </div>
                        :
                        <Link className="card-message-content clearfix" to={{ pathname: "message/1233" }}>
                            <h4>{message.description}</h4>
                            {
                                message.pictures.length > 1 ?
                                    <div className="imgs">
                                        {picturesList}
                                    </div>
                                    :
                                    <p className="img-single">
                                        {picturesList}
                                    </p>
                            }
                        </Link>
                }
                <div className="card-message-bottom">
                    <CTABar />
                </div>
            </div>
        )
    }

    componentWillUnmount() {
    }
}

// const mapStateToProps = state => {
//     const { appStatus } = state;
//     console.log(state)
//     return {
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Message);
export default Message;