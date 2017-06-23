/**
 * Created by townmi on 17/6/4.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './publish.scss';

import VenuesCell from '../../components/VenuesCell';
import Tag from '../../components/Tag';

import { hideBar, showBar, deleteUnmount } from '../../store/actions/appStatus';
import { addPictures } from '../../store/actions/publish';

class Publish extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true,
			publish: null,
			tmpImages: [],

		}
		this.submit = this.submit.bind(this);
		this.handleFileUpload = this.handleFileUpload.bind(this);
	}
	componentWillMount() {
		const { hideBar, publish, appStatus, router } = this.props;

		hideBar();
		this.setState({
			publish,
			tmpImages: publish.pictures ? publish.pictures : []
		});
	}
	componentWillReceiveProps(nextProps) {
	}
	submit() {
		// this.props.router.push("/message/123");
	}
	handleFileUpload(e) {
		const { addPictures } = this.props;
		const {tmpImages} = this.state;
		let fd = new FormData();
		const files = e.target.files;
		for (let index = 0; index < files.length; index++) {
			var file = files[index];
			fd.append("files", file);
			tmpImages.push(file)
		}
		this.setState({
			tmpImages: tmpImages
		});
		addPictures(tmpImages);
	}
	previewImage(file, e) {
		var reader = new FileReader();
		reader.onload = (function (pic) {
			return function (e) {
				if (pic) {
					pic.style.backgroundImage = `url(${e.target.result})`;
				}
			};
		})(e);
		reader.readAsDataURL(file);
	}
	render() {
		const { show, publish, tmpImages } = this.state;

		const tmpImageStr = tmpImages.map((cell, index) => {
			return (
				<div className="pic" key={index} ref={this.previewImage.bind(this, cell)}></div>
			);
		});

		return (
			<div className="publish" style={show ? { display: "block" } : { display: "none" }}>
				<form action="" className="publish-form">
					<textarea name="" id="" cols="30" rows="10" placeholder="Show出你的夜生活～"></textarea>
					<div className="pics-box">
						{tmpImageStr}
						<div className="file">
							<input type="file" multiple accept='image/*' onChange={this.handleFileUpload} />
						</div>
					</div>
					<div className="select">
						<p className="_cell">
							<Link to={{ pathname: `${BASENAME}search`, state: { type: "venues" } }}>
								<i className="icon ion-venues-address"></i> <span>所在地点</span> <i className="icon ion-angle-right"></i>

							</Link>
						</p>
						{
							publish && publish.venues ?
								<VenuesCell simple={true} />
								: ""
						}
					</div>
					<div className="select">
						<p className="_cell">
							<Link to={{ pathname: `${BASENAME}search`, state: { type: "topic" } }}>
								<i className="icon ion-topic"></i> <span>添加话题</span> <i className="icon ion-angle-right"></i>
							</Link>
						</p>
						{
							publish && publish.topic ?
								<Tag word={publish.topic.topic} />
								: ""
						}
					</div>
					<button className="publish-submit" onClick={this.submit}>发布</button>
				</form>
			</div>
		)
	}
	componentWillUnmount() {
		const { showBar, appStatus, deleteUnmount, router } = this.props;
		if (router.location.pathname !== `${BASENAME}topic`) {
			showBar();
		}
	}
}

const mapStateToProps = state => {
	const { appStatus, router, publish } = state;
	return {
		router,
		publish,
		appStatus
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		hideBar: () => {
			dispatch(hideBar())
		},
		showBar: () => {
			dispatch(showBar())
		},
		addPictures: (cell) => {
			dispatch(addPictures(cell))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Publish);