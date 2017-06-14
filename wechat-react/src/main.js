'use strict';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createHashHistory';

import {
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
import Search from './router/Search/Search';

import createStore from './store';

const history = createHistory();

const store = createStore(routerMiddleware(history));

class App extends Component {

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div>
                        <Route path="/" component={Bootstrap} />
                        <Route name="home" path="/home" component={Home} />
                        <Route name="userCenter" path="/user" component={User} />
                        <Route name="venuesList" path="/list" component={List} />
                        <Route name="search" path="/search" component={Search} />
                    </div>
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