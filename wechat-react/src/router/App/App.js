import React, { Component } from 'react';
import { IndexLink, Link, withRouter, hashHistory } from 'react-router';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import TabBar from '../../components/TabBar';
import './app.scss';

export default class Bootstrap extends Component {
    render() {
        return (
            <div className="app">
                <CSSTransitionGroup
                    component="div"
                    transitionName="transition"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    <div key={this.props.location.pathname}>
                        {
                            this.props.children
                        }
                    </div>
                </CSSTransitionGroup>
                <TabBar />
            </div>
        )
    }
}