/**
 * Created by townmi on 17/6/4.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './actionBar.scss';

export default class ActionBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { position } = this.props;
        return (
            <Link className={position==="bottom" ? "action-bar bottom" : "action-bar"} to={{ pathname: "/publish", state: {test: false}}}>
                <div className="icon ion-pencil"></div>
            </Link>
        )
    }
}