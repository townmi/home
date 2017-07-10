import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	StatusBar,
	ScrollView,
	Platform,
	Dimensions
} from 'react-native';
import Icon from "../../assets/icons/icons";
import Header from '../../components/Header';

class UserScreen extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		tabBarLabel: ({ tintColor }) => {
			const icon = tintColor === 'rgba(255, 255, 255, 1)' ? 'uniF14D' : 'uniF14E';
			if (Platform.OS === 'ios') {
				return '我的';
			} else {
				return (
					<View style={{ alignItems: 'center' }}>
						<Text style={{ fontFamily: 'ionicons', fontSize: 22, color: tintColor }}>
							{Icon(icon)}
						</Text>
						<Text style={{ color: tintColor, fontSize: 16 }}>
							我的
					</Text>
					</View>
				)
			}
		},
		tabBarIcon: ({ tintColor }) => {
			const icon = tintColor === 'rgba(255, 255, 255, 1)' ? 'uniF14D' : 'uniF14E';
			return (
				<Text style={{ fontFamily: 'ionicons', fontSize: 20, color: tintColor }}>
					{Icon(icon)}
				</Text>
			)
		},
	});
	render() {
		return (
			<View style={styles.box}>
				<StatusBar
					animated={true}
					hidden={false}
					backgroundColor={'#19191d'}
					translucent={true}
					barStyle={'light-content'}
					showHideTransition={'fade'}
					networkActivityIndicatorVisible={true}
				/>
				<View style={styles.header}>
					<Image style={styles.headerImage} source={require('./images/user-bg.jpg')} />
					<View style={styles.head}>
						<Image style={styles.headImage} source={{ uri: 'https://wx.qlogo.cn/mmopen/4ONCBWepv1hAaG3ehdRNkkFI91qZ9qYvvJII7iaPOicblSoLsLibiaHSQbbpECLV5ciaP2IsIviaiaHUcokkPyE6iawFzdZtBKficLkjT/0' }} />
					</View>
				</View>
				<View style={styles.container}>
					<Text>精选</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	box: {
		paddingTop: 20,
		backgroundColor: '#19191d'
	},
	header: {
		position: 'relative',
	},
	headerImage: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').width * 4 / 7,
		resizeMode: 'cover'
	},
	head: {
		width: 72,
		height: 72,
		paddingTop: 2,
		paddingRight: 2,
		paddingBottom: 2,
		paddingLeft: 2,
		left: Dimensions.get('window').width / 2 - 34,
		top: Dimensions.get('window').width * 4 / 7 / 2 - 34,
		position: 'absolute',
		backgroundColor: '#f051db',
		borderRadius: 34,
	},
	headImage: {
		width: 68,
		height: 68,
		borderRadius: 34,
	},
	container: {
		height: Dimensions.get('window').height - 112,
		backgroundColor: '#ffffff'
	}
});

export default UserScreen;