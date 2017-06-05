import React, {Component} from 'react';
import {IndexLink, Link, withRouter, hashHistory} from 'react-router';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import TabBar from '../../components/TabBar';
import './app.scss';

export default class Bootstrap extends Component {
    render() {
        const {route} = this.props;
        let key = null;
        if(route && route.name) {
            switch (route.name) {
                case "searchRoot":
                    key = "app-search";
                    break;
                default:
                    key = "app";
                    break;
            }
        } else {
            key = "app";
        }
        console.log(key);
        return (
            <div className={key}>
                <CSSTransitionGroup
                    component="div"
                    transitionName={key}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    <div key={this.props.location.pathname}>
                        {
                            this.props.children
                        }
                    </div>
                </CSSTransitionGroup>
                {
                    key === "app-search" ?
                    ""
                    :
                    <TabBar />
                }
            </div>
        )
    }
}