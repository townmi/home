import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import PropTypes from 'prop-types';
import {IndexLink, Link, withRouter, hashHistory} from 'react-router';
import Message from '../../components/Message';
import VenuesCell from '../../components/VenuesCell';
import './communityInfo.scss';

@inject('authData') @observer
class CommunityInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
    }

    componentDidMount() {
        document.title = "Night+--呃呃呃～算是吧～";
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        const {account} = this.props.authData;
        return true;
    }

    render() {
        const messageInfo = {
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
        };

        const {route} = this.props;
        return (
            <div className="community-info">
                <Message profile={messageInfo.profile} message={messageInfo.message} route={route}/>
                <VenuesCell/>
            </div>
        )
    }

    componentWillUnmount() {
    }
}

export default CommunityInfo;