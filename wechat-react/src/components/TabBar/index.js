import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {IndexLink, Link, withRouter, hashHistory} from 'react-router';
import './tabBar.scss';

export default class TabBar extends Component {
    render() {
        const cellWidth = window.innerWidth > 375 ? 375 : window.innerWidth;
        return (
            <div className="tab-bar" style={{width: cellWidth, marginLeft: `-${cellWidth/2}px`}}>
                <div className="item-index">
                    <Link to="/home" activeClassName="active">
                        <div className="icon ion-index"></div>
                        <span className="text">精选</span>
                    </Link>
                </div>
                <div className="item-list">
                    <Link to="/list" activeClassName="active">
                        <div className="icon ion-list"></div>
                        <span className="text">预订</span>
                    </Link>
                </div>
                <div className="item-community">
                    <Link to="/community" activeClassName="active">
                        <div className="icon ion-community"></div>
                        <span className="text">社区</span>
                    </Link>
                </div>
                <div className="item-user">
                    <Link to="/user" activeClassName="active">
                        <div className="icon ion-user"></div>
                        <span className="text">我的</span>
                    </Link>
                </div>
            </div>
        )
    }
}