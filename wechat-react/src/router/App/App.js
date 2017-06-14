import React, {Component} from 'react';
import {
    Route
} from 'react-router';
import {connect} from 'react-redux';

import {loadSuccess, loadFail} from '../../store/actions/appStatus';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


import Community from '../Community/Community';
import CommunityInfo from '../CommunityInfo/CommunityInfo';
import Publish from '../Publish/Publish';


import TabBar from '../../components/TabBar';
import Loading from '../../components/Loading';
import './app.scss';

// @inject('AppStatus') @observer
class Bootstrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    componentWillMount() {
        const {loading} = this.props;
        this.setState({
            loading: loading
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loading: nextProps.loading
        });
    }

    componentDidMount() {
        // const { loading } = this.state;
    }

    render() {
        const {route} = this.props;
        const {loading} = this.state;

        const cellWidth = window.innerWidth > 414 ? 414 : window.innerWidth;
        let key = null;
        if (route && route.name) {
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
        console.log(loading);
        return (
            <div className={key} style={{width: `${cellWidth}px`}}>
                <CSSTransitionGroup
                    component="div"
                    transitionName={key}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    <Route name="community" path="/community" component={Community} />
                    <Route name="message" path="/message/:id" component={CommunityInfo} />
                    <Route name="publish" path="/publish" component={Publish} />
                </CSSTransitionGroup>
                {
                    key === "app-search" ?
                        ""
                        :
                        <TabBar />
                }
                {
                    loading ?
                        <Loading />
                        :
                        ""
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {appStatus} = state;

    return {
        loading: appStatus.loading || false
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Bootstrap);