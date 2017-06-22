import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Community from '../Community/Community';
import CommunityInfo from '../CommunityInfo/CommunityInfo';
import Publish from '../Publish/Publish';
import Search from '../Search/Search';
import Topic from '../Topic/Topic';

import TabBar from '../../components/TabBar';
import Loading from '../../components/Loading';
import './app.scss';

class Bootstrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            hideBar: false,
            router: null
        }
    }

    componentWillMount() {
        const { loading } = this.props;
        this.setState({
            loading: loading
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            loading: nextProps.loading,
            hideBar: nextProps.hideBar,
            router: nextProps.router
        });
    }
    componentDidMount() {
    }

    render() {
        const key = "app";
        const { loading, hideBar } = this.state;
        const cellWidth = window.innerWidth > 414 ? 414 : window.innerWidth;
        return (
            <div>
                <Route render={({ location }) => (
                    <div className={hideBar ? `${key} no-tab-bar` : key} style={{ width: `${cellWidth}px` }}>
                        <Route exact path="/dist" render={() => (
                            <Redirect to="/dist/community" />
                        )} />
                        {
                            hideBar ? "" : <TabBar />
                        }
                        <CSSTransitionGroup
                            component="div"
                            transitionName={key}
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}
                        >
                            <Switch key={location.key} location={location}>
                                <Route exact path="/dist/community" component={Community} />
                                <Route exact path="/dist/message/:id" component={CommunityInfo} />
                                <Route exact path="/dist/publish" component={Publish} />
                                <Route exact path="/dist/search" component={Search} />
                                <Route exact path="/dist/topic" component={Topic} />
                            </Switch>
                        </CSSTransitionGroup>
                        {
                            loading ? <Loading /> : ""
                        }
                    </div>
                )} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { appStatus, router } = state;
    return {
        loading: appStatus.loading || false,
        hideBar: appStatus.hideBar || false,
        router
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Bootstrap);