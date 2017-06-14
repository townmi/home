import React, {Component} from 'react';
// import {observer, inject} from 'mobx-react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Message from '../../components/Message';
import VenuesCell from '../../components/VenuesCell';
import './communityInfo.scss';
import {getMessageInfo} from '../../libs/api';

import {loading, loadSuccess, loadFail} from '../../store/actions/appStatus';

class CommunityInfo extends Component {
    static childContextTypes = {
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            messageInfo: {}
        }
    }

    getChildContext() {
        const {history, location} = this.props;
        return {history, location};
    }

    componentWillMount() {
        const self = this;
        const {location, loading, loadSuccess, loadFail} = this.props;
        if (location.action === "POP") {
            return false;
        }
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
        return true;
    }

    render() {
        const {messageInfo} = this.state;
        return (
            <div className="community-info">
                <Message profile={messageInfo.profile} message={messageInfo.message} canLink={false}/>
                <VenuesCell />
            </div>
        )
    }

    componentDidMount() {
        document.title = "Night+--呃呃呃～算是吧～";
    }

}

const mapStateToProps = state => {
    const {appStatus} = state;
    return {}
};

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
};

export default connect(mapStateToProps, mapDispatchToProps)(CommunityInfo);