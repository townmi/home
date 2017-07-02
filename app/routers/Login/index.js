import React, { Component } from 'react';
import {
	View,
	Text,
	Button,
	Image,
	StyleSheet,
	StatusBar,
	Dimensions
} from 'react-native';

class Login extends Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	constructor(props) {
		super(props);
		this.timer = null;
		this.state = {
			seconds: 2,
			time: 1000
		}
		this.start();
	}
	start() {
		const { navigate } = this.props.navigation;
		this.timer = setInterval(() => {
			const seconds = this.state.seconds - 1;
			if (seconds < 1) {
				clearInterval(this.timer);
				navigate('User')
			}
			this.setState({
				seconds: seconds
			})
		}, this.state.time);
	}
	render() {
		const { seconds } = this.state;
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<StatusBar
					hidden={true}
				/>
				<Text style={styles.title}>{seconds} </Text>
				<Image
					style={styles.welcome}
					source={{ uri: 'http://www.nightplus.cn/dist/assets/img/splash-logo.png' }}
				/>
			</View>
		);
	}
}

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container: {
		width: ScreenWidth,
		height: ScreenHeight,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#d6d7da',
	},
	title: {
		position: "absolute",
		right: "10%"
	},
	welcome: {
		width: ScreenWidth,
		height: ScreenHeight
	},
});

export default Login;