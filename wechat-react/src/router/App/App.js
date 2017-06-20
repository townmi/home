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
            <Router>
                <Route render={({ location }) => (
                    <div className={key} style={{ width: `${cellWidth}px` }}>
                        <Route exact path="/" render={() => (
                            <Redirect to="/community" />
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
                                <Route path="/community" component={Community} />
                                <Route path="/message/:id" component={CommunityInfo} />
                                <Route path="/publish" component={Publish} />
                                <Route path="/search" component={Search} />
                            </Switch>
                        </CSSTransitionGroup>
                        {
                            loading ? <Loading /> : ""
                        }
                    </div>
                )} />
            </Router>
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