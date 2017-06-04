import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { IndexLink, Link, withRouter, hashHistory } from 'react-router';
import './user.scss';

@inject('authData', 'homeStore') @observer class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: null
        }
        this.refresh = this.refresh.bind(this);
    }
    componentWillMount() {
        const self = this;
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        const { account } = this.props.authData;
        return true;
    }
    refresh () {
        const { refresh, account } = this.props.authData;
        console.log(account)
    }
    render() {
        const { account } = this.state;
        // console.log(this.state);
        return (
            <div className="user">
                <div>{account}</div>
                <div onClick={this.refresh}>123</div>
            </div>
        )
    }
    componentWillUnmount() {
    }
}

export default User;