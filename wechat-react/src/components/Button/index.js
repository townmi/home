import React, { Component } from 'react';
import { IndexLink, Link, withRouter, hashHistory } from 'react-router';
import './message.scss';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
    }
    componentWillUnmount() {
    }
    render() {
        return (
            <div className="card-message">
                <div className="">
                    <Avator />
                    <button>关注</button>
                </div>
            </div>
        )
    }
}