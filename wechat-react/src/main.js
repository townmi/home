'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import {
    // Route,
    HashRouter as Router,
} from 'react-router-dom';
import {
    Switch,
    Route
} from 'react-router';

import Home from './router/Home/Home';
import Launch from './router/Launch/Launch';
import Login from './router/Login/Login';
import Bootstrap from './router/App/App';
import User from './router/User/User';
import List from './router/List/List';
import Community from './router/Community/Community';
import CommunityInfo from './router/CommunityInfo/CommunityInfo';
import Publish from './router/Publish/Publish';
import Search from './router/Search/Search';

import store from './store';

// console.log(store)
// const stores = {authData, homeStore, AppStatus};

// console.log(Router.hashHistory)

// const history = syncHistoryWithStore(Router.hashHistory, store)

class App extends Component {
    static propTypes = {
        routes: PropTypes.object.isRequired
    };

    shouldComponentUpdate() {
        return true;
    }

    render() {
        // const { routes } = this.props;
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Bootstrap} />
                        <Route name="home" path="/home" component={Home} />
                        <Route name="userCenter" path="/user" component={User} />
                        <Route name="venuesList" path="/list" component={List} />
                        <Route name="community" path="/community" component={Community} />
                        <Route name="message" path="/message/:id" component={CommunityInfo} />
                        <Route name="publish" path="/publish" component={Publish} />
                        <Route name="searchRoot" path="/s" component={Bootstrap} />
                        <Route name="search" path="/search" component={Search} />
                    </Switch>
                </Router>
            </Provider>
        )

    }

    // render() {
    //     const { routes } = this.props;
    //     return (
    //         <Provider store={store}>
    //             <Router history={history}>
    //                 <Route path="/" component={Bootstrap}>
    //                     <IndexRoute component={Launch} />
    //                     <Route name="home" path="/home" component={Home} />
    //                     <Route name="userCenter" path="/user" component={User} />
    //                     <Route name="venuesList" path="/list" component={List} />
    //                     <Route name="community" path="/community" component={Community} />
    //                     <Route name="message" path="/message/:id" component={CommunityInfo} />
    //                 </Route>
    //                 <Route name="publish" path="/publish" component={Publish} />
    //                 <Route name="searchRoot" path="/s" component={Bootstrap}>
    //                     <Route name="search" path="/search" component={Search} />
    //                 </Route>
    //             </Router>
    //         </Provider>
    //     )

    // }

}

export default App;