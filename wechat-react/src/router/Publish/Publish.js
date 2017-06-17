/**
 * Created by townmi on 17/6/4.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './publish.scss';

import { hideBar, showBar } from '../../store/actions/appStatus';

class Publish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.submit = this.submit.bind(this);
    }
    componentWillMount() {
        const { hideBar } = this.props;
        hideBar();
    }
    submit() {
        this.props.router.push("/message/123");
    }
    render() {
        const { show } = this.state;
        return (
            <div className="publish" style={show ? { display: "block" } : { display: "none" }}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <Link to={{ pathname: "search" }}>
                    <p>
                        所在KTV／酒吧
                    </p>
                </Link>
                <button className="publist-submit" onClick={this.submit}>发布</button>
            </div>
        )
    }
    componentWillUnmount() {
        const { showBar } = this.props;
        showBar();
    }
}

const mapStateToProps = state => {
    const { appStatus, router } = state;
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideBar: () => {
            dispatch(hideBar())
        },
        showBar: () => {
            dispatch(showBar())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Publish);