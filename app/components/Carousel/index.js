import React, { Component } from 'react';
import {
	View,
	Text,
	Dimensions,
	Image,
	StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window')
const loading = require('./images/loading.gif');

const Slide = props => {
	return (<View style={styles.slide}>
		<Image resizeMode='stretch' onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{ uri: props.uri }} />
		{
			!props.loaded && <View style={styles.loadingView}>
				<Image style={styles.loadingImage} source={loading} />
			</View>
		}
	</View>)
}

class Carousel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			imgList: [],
			loadQueue: []
		}
		this.loadHandle = this.loadHandle.bind(this)
	}
	componentWillMount() {
		const { banners } = this.props;
		let imgList = [], loadQueue = [];
		banners.forEach((cell) => {
			imgList = [],
				loadQueue = []
		}, this);
		this.setState({
			imgList,
			loadQueue
		})
	}
	componentWillReceiveProps(nextProps) {
		const { banners } = nextProps;
		const imgList = [
			'https://raw.githubusercontent.com/ab-inbev/APAC_Yedian_Wechat/master/src/img/activity/0518.jpg?token=AGY_lZzDWsgr2ZIweyEWwl8qjtcQsvTyks5ZaY8SwA%3D%3D',
			'https://raw.githubusercontent.com/ab-inbev/APAC_Yedian_Wechat/master/src/img/activity/0601.jpg?token=AGY_lZbXMRbtYDHuQE8uUw2rRFiFDNBIks5ZaY87wA%3D%3D'
		], loadQueue = [0, 0];
		this.setState({
			imgList,
			loadQueue
		});
	}
	loadHandle(i) {
		let loadQueue = this.state.loadQueue
		loadQueue[i] = 1
		this.setState({
			loadQueue
		})
	}
	render() {
		return (
			<View style={styles.container}>
				<Swiper autoplay={true} loadMinimal loadMinimalSize={1} style={styles.wrapper} height={width * 4 / 7}
					dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
					activeDot={<View style={{ backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
					paginationStyle={{
						bottom: 10
					}} loop>
					{
						this.state.imgList.map((item, i) => <Slide
							loadHandle={this.loadHandle}
							loaded={!!this.state.loadQueue[i]}
							uri={item}
							i={i}
							key={i} />)
					}
				</Swiper>
			</View>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
    	marginBottom: 10
	},
	wrapper: {
	},
	slide: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},
	image: {
		flex: 1,
		backgroundColor: 'transparent',
		resizeMode:'cover'
	},
	loadingView: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: 'rgba(255,255,255, .5)'
	},

	loadingImage: {
		width: 60,
		height: 60
	}
});

export default Carousel;