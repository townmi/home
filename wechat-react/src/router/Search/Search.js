/**
 * Created by townmi on 17/6/4.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './search.scss';

import {loading, loadSuccess, loadFail} from '../../store/actions/appStatus';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
        const { loading, loadSuccess, loadFail} = this.props;
        // loading();
    }
    submit() {
        this.props.router.push("/message/123");
    }
    render() {
        const { show } = this.state;
        return (
            <div className="search-page">
                <div className="input-box">
                    <input type="text" placeholder="请输入查询关键字" className="search-input" />
                    <button type="submit" className="search-submit">
                        <div className="icon ion-search"></div>
                    </button>
                </div>
                <ul>
                    <li></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { appStatus, router } = state;
    return {
        loading: appStatus.loading || false,
        router
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);