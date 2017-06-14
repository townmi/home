/**
 * Created by townmi on 17/6/4.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './search.scss';

class Publish extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
    }
    submit() {
        this.props.router.push("/message/123");
    }
    render() {
        const {show} = this.state;
        return (
            <div className="search-page">
                <div className="input-box">
                    <input type="text" placeholder="请输入查询关键字" className="search-input"/>
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

export default Publish;