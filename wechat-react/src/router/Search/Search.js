/**
 * Created by townmi on 17/6/4.
 */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './search.scss';
import { getSearch } from '../../libs/api';

import { loading, loadSuccess, loadFail } from '../../store/actions/appStatus';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: false,
            list: [],
            search: "",
            searchPlaceholder: null,
            type: null
        }
        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
        this.change = this.change.bind(this);
        this.handler = this.handler.bind(this);
    }
    componentWillMount() {
        const self = this;
        const { loading, loadSuccess, loadFail, location } = this.props;
        const type = location && location.state && location.state.type;
        let searchPlaceholder = null;
        switch (type) {
            case "venues":
                searchPlaceholder = "搜索商户关键字"
                break;
            case "topic":
                searchPlaceholder = "搜索话题关键字"
                break;
            default:
                searchPlaceholder = "搜索商户关键字"
                break;
        }
        this.setState({
            searchPlaceholder: searchPlaceholder,
            type: type
        });
        loading();
        getSearch().then(res => {
            loadSuccess();
            self.setState({
                list: res.data
            });
        }, error => {
            loadFail();
            console.log(error);
        });
    }
    focus() {
        this.setState({
            input: true
        })
    }
    blur() {
        const { search } = this.state;
        if (!search) {
            this.setState({
                input: false
            });
        }
    }
    change(e) {
        this.setState({
            search: e.target.value
        })
    }
    handler() {
        const { history } = this.props;
        // console.log(history);
        history.goBack();
    }
    render() {
        const { type, input, search, searchPlaceholder, list } = this.state;
        const listStr = list.map((cell, index) => {
            return (
                <li key={cell.id} onClick={this.handler}>
                    <p>{cell.topic}</p>
                </li>
            )
        });

        return (
            <div className="search-page">
                <div className={input ? "input-box focus" : "input-box"}>
                    <i className="icon ion-search-square"></i>
                    <input type="text" value={search} placeholder={searchPlaceholder} className="search-input" onBlur={this.blur} onFocus={this.focus} onChange={this.change} />
                </div>
                {
                    type === 'topic' ?
                        <h3>热门话题</h3>
                        : ""
                }
                <ul className={type}>
                    {listStr}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { appStatus, router } = state;
    return {
        loading: appStatus.loading || false
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));