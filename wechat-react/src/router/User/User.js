import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './user.scss';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: null
        };
        this.refresh = this.refresh.bind(this);
    }

    componentWillMount() {
        const self = this;
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    refresh() {
    }

    render() {
        const {account} = this.state;
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