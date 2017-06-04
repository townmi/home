import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { IndexLink, Link, withRouter, hashHistory } from 'react-router';
import Carousel from '../../components/Carousel';
import Avator from '../../components/Avator';
import Message from '../../components/Message';
import './community.scss';

@inject('authData') @observer class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
    }
    componentWillReceiveProps(nextProps) {
    }
    shouldComponentUpdate(nextProps, nextState) {
        const { account } = this.props.authData;
        return true;
    }
    render() {
        const slides = [
            {
                url: "http://prod-app.ye-dian.com/dist/assets/img/0525.jpg",
                link: ""
            },
            {
                url: "http://prod-app.ye-dian.com/dist/assets/img/0518.jpg",
                link: ""
            }
        ];

        return (
            <div className="community">
                <div className="banner">
                    <Carousel slides={slides} element={"div"} enterDelay={1000} leaveDelay={1000} animation={"fade"} speed={3000} />
                </div>
                <div className="news">
                    <span>最新</span>
                    <Link to="" className="link">更多</Link>
                </div>
                <div className="news-timeLine">
                    <Avator />
                </div>
                <div className="tab">

                </div>
                <div className="section">
                    <h3>社区精选</h3>
                    <ul>
                        <li className="message-cell">
                            <Message />
                        </li>
                        <li className="message-cell">
                            <Message />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    componentWillUnmount() {
    }
}

export default Community;