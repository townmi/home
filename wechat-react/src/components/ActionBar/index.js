/**
 * Created by townmi on 17/6/4.
 */
import React, {Component} from 'react';
import {IndexLink, Link, withRouter, hashHistory} from 'react-router';
import './actionBar.scss';

export default class ActionBar extends Component {
    render() {
        return (
            <Link className="action-bar" to={{pathname: "publish"}}>
                参与
            </Link>
        )
    }
}