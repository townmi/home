import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {IndexLink, Link, withRouter, hashHistory} from 'react-router';
import Carousel from '../../components/Carousel';
import Avator from '../../components/Avator';
import Message from '../../components/Message';
import ActionBar from '../../components/ActionBar';
import './community.scss';

@inject('authData') @observer
class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
    }

    componentDidMount() {
        document.title = "Night+--社区";
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        const {account} = this.props.authData;
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

        const messages = [
            {
                profile: {
                    avator: "http://www.wangmingdaquan.cc/tx61/66.jpg",
                    username: "towne",
                    date: "2017-10-8"
                },
                message: {
                    description: "呃呃呃～算是吧～",
                    pictures: [
                        "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg",
                        "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg"
                    ]
                }
            },
            {
                profile: {
                    avator: "http://www.wangmingdaquan.cc/tx61/66.jpg",
                    username: "towne",
                    date: "2017-10-8"
                },
                message: {
                    description: "呃呃呃～算是吧～",
                    pictures: [
                        "http://onq4xhob0.bkt.clouddn.com/bdc270ac6e5642b880b60b002e3a81a6.jpeg"
                    ]
                }
            }
        ];

        const messagesList = messages.map((cell, index) => {
            return (
                <li className="message-cell" key={index}>
                    <Message profile={cell.profile} message={cell.message}/>
                </li>
            )
        });

        const userList = [
            {
                avator: "http://www.wangmingdaquan.cc/tx61/66.jpg",
                username: "老王",
                city: "上海市",
                area: "晋安区"
            },
            {
                avator: "http://www.wangmingdaquan.cc/tx61/66.jpg",
                username: "小胖",
                city: "广州市",
                area: "浦东新区"
            },
            {
                avator: "http://www.wangmingdaquan.cc/tx61/66.jpg",
                username: "老王",
                city: "上海市",
                area: "晋安区"
            }
        ];

        const userListStr = userList.map((cell, index) => {
            return (
                <li key={index}>
                    <Avator style={"vertical"} profile={cell} model={"followCard"} showFollow={true}/>
                </li>
            )
        });

        return (
            <div className="community">
                <div className="banner">
                    <Carousel slides={slides} element={"div"} enterDelay={1000} leaveDelay={1000}
                              speed={3000}/>
                </div>
                <div className="title">
                    <span>最新</span>
                    <Link to="" className="link">更多</Link>
                </div>
                <div className="news-timeLine">
                    <Avator/>
                </div>
                <div className="tab">

                </div>
                <div className="section">
                    <h3>社区精选</h3>
                    <ul>
                        {messagesList}
                    </ul>
                </div>

                <div className="title">
                    <span>关注</span>
                    <Link to="" className="link">更多</Link>
                </div>
                <ul className="follow-list clearfix">
                    {userListStr}
                </ul>
                <div className="section">
                    <ul>
                        {messagesList}
                    </ul>
                </div>
                <ActionBar/>
            </div>
        )
    }
}

export default Community;