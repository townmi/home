import React, { Component } from 'react';
// import {observer, inject} from 'mobx-react';
import PropTypes from 'prop-types';
import { IndexLink, Link, withRouter, hashHistory } from 'react-router';
import { connect } from 'react-redux';

import Message from '../../components/Message';
import VenuesCell from '../../components/VenuesCell';
import './communityInfo.scss';
import { getMessageInfo } from '../../libs/api';

import { loading, loadSuccess, loadFail } from '../../store/actions/appStatus';

class CommunityInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageInfo: {}
        }
    }

    componentWillMount() {
        const self = this;
        const { location, loading, loadSuccess, loadFail } = this.props;
        if (location.action === "POP") {
            return false;
        }
        // console.log()
        loading();
        getMessageInfo().then(res => {
            loadSuccess();
            self.setState({
                messageInfo: res.data
            });
        }, error => {
            loadFail();
            console.log(error);
        });
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        // const {account} = this.props.authData;
        console.log(nextProps.location.action);
        return true;
    }

    render() {
        const { messageInfo } = this.state;
        const { route } = this.props;
        return (
            <div className="community-info">
                <Message profile={messageInfo.profile} message={messageInfo.message} route={route} />
                <VenuesCell />
            </div>
        )
    }

    componentDidMount() {
        document.title = "Night+--呃呃呃～算是吧～";
    }

}

const mapStateToProps = state => {
    const { appStatus } = state;
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loading: () => {
            dispatch(loading())
        },
        loadSuccess: () => {
            dispatch(loadSuccess())
        },
        loadFail: () => {
            dispatch(loadFail())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityInfo);