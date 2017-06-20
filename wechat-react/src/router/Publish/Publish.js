/**
 * Created by townmi on 17/6/4.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './publish.scss';

import VenuesCell from '../../components/VenuesCell';
import Tag from '../../components/Tag';

import { hideBar, showBar } from '../../store/actions/appStatus';

class Publish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            publish: null
        }
        this.submit = this.submit.bind(this);
    }
    componentWillMount() {
        const { hideBar, publish } = this.props;
        hideBar();
        this.setState({
            publish
        });
    }
    componentWillReceiveProps(nextProps) {
    }
    submit() {
        this.props.router.push("/message/123");
    }
    render() {
        const { show, publish } = this.state;
        return (
            <div className="publish" style={show ? { display: "block" } : { display: "none" }}>
                <form action="">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Show出你的夜生活～"></textarea>
                    <div className="pics-box">
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="file">
                            <input type="file" />
                        </div>
                    </div>
                    <Link to={{ pathname: "/search", state: { type: "venues" } }}>
                        <div className="select">
                            <p><i className="icon ion-venues-address"></i> <span>所在地点</span> <i className="icon ion-angle-right"></i></p>
                            {
                                publish && publish.venues ?
                                    <VenuesCell />
                                    : ""
                            }
                        </div>
                    </Link>
                    <Link to={{ pathname: "/search", state: { type: "topic" } }}>
                        <div className="select">
                            <p><i className="icon ion-topic"></i> <span>添加话题</span> <i className="icon ion-angle-right"></i></p>
                            {
                                publish && publish.topic ?
                                    <Tag word={publish.topic.topic} />
                                    : ""
                            }
                        </div>
                    </Link>
                    <button className="publish-submit" onClick={this.submit}>发布</button>
                </form>
            </div>
        )
    }
    componentWillUnmount() {
        const { showBar } = this.props;
        showBar();
    }
}

const mapStateToProps = state => {
    const { appStatus, router, publish } = state;
    return {
        publish
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