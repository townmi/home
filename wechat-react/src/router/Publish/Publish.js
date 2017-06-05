/**
 * Created by townmi on 17/6/4.
 */
import React, {Component} from 'react';
import {IndexLink, Link, withRouter, hashHistory} from 'react-router';
import './publish.scss';

class Publish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.submit = this.submit.bind(this);
    }
    componentWillMount() {
        // setTimeout(() => {
        //     this.setState({
        //         show: true
        //     });
        // }, 600);
    }
    submit() {
        this.props.router.push("/message/123");
    }
    render() {
        const {show} = this.state;
        return (
            <div className="publish" style={show ? {display: "block"} : {display: "none"}}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <Link to={{pathname: "search"}}>
                    <p>
                        所在KTV／酒吧
                    </p>
                </Link>
                <button className="publist-submit" onClick={this.submit}>发布</button>
            </div>
        )
    }
}

export default Publish;