import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ctabar.scss';

export default class CTABar extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
    }
    componentWillUnmount() {
    }
    render() {
        return (
            <div className="cta-box clearfix">
                <div className="cell _like">
                    <div className="icon ion-cta-like"></div>
                    <span className="text">23</span>
                </div>
                <div className="cell _collection">
                    <div className="icon ion-cta-collection"></div>
                    <span className="text">23</span>
                </div>
                <div className="cell _comment">
                    <div className="icon ion-cta-comment"></div>
                    <span className="text">23</span>
                </div>
            </div>
        )
    }
}