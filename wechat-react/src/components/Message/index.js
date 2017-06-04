import React, {Component} from 'react';
import {IndexLink, Link, withRouter, hashHistory} from 'react-router';
import Avator from '../Avator';
import './message.scss';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {profile, message} = this.props;
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

        this.setState({
            profile: profile ? profile : defaultProfile,
            message: message ? message : defaultMessage
        })
    }

    componentWillUnmount() {
    }

    render() {
        const {route} = this.props;
        const {profile, message} = this.state;
        let picturesList = "";
        if (message.pictures.length === 1) {
            picturesList = (
                <img src={message.pictures[0]} alt=""/>
            );
        } else if (message.pictures.length > 1) {
            picturesList = message.pictures.map((cell, index) => {
                return (
                    <div className="img-single" key={index}>
                        <img src={cell} alt=""/>
                    </div>
                )
            });
        }
        return (
            <div className="card-message">
                <div className="card-message-top">
                    <Avator profile={profile} size={"small"} showFollow={true} model={"default"}/>
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
                        <Link className="card-message-content" to={{pathname: "message/1233"}}>
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

            </div>
        )
    }
}