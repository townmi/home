/**
 * Created by townmi on 17/6/4.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './actionBar.scss';

export default class ActionBar extends Component {
    render() {
        return (
            <Link className="action-bar" to={{pathname: "publish"}}>
                <div className="icon ion-pencil"></div>
            </Link>
        )
    }
}