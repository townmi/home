import React, { Component } from 'react';
import { IndexLink, Link, withRouter, hashHistory } from 'react-router';
import './avator.scss';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        let { avator, username, date, size } = this.props;
        console.log(username, date);
        this.setState({
            avator: avator ? avator : "http://www.wangmingdaquan.cc/tx61/66.jpg",
            username: username ? username : undefined,
            date: date ? date : undefined,
            size: size ? size : "normal"
        })
    }
    componentWillUnmount() {
    }
    render() {
        const { avator, username, date, size } = this.state;
        return (
            <div className={`avator-box clearfix ${size}`}>
                <div className="avator" style={{ backgroundImage: `url(${avator})` }}>
                </div>
                {
                    username && date ?
                        <div className="profile">
                            <strong>{username}</strong>
                            <p>{date}</p>
                        </div>
                        : ''
                }
            </div>
        )
    }
}