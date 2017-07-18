import React, { Component } from 'react';
import {
	View,
	Text,
	VirtualizedList,
	ListView,
	TouchableHighlight,
	Image,
	StyleSheet,
	StatusBar,
	ScrollView,
	Platform,
	Dimensions,
	Linking
} from 'react-native';
import Icon from "../../assets/icons/icons";
import Header from '../../components/Header';
import ListCell from '../../components/ListCell';

class VenuesInfoScreen extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		tabBarLabel: ({ tintColor }) => {
			const icon = tintColor === 'rgba(255, 255, 255, 1)' ? 'uniF14D' : 'uniF14E';
			if (Platform.OS === 'ios') {
				return '商家管理';
			} else {
				return (
					<View style={{ alignItems: 'center' }}>
						<Text style={{ fontFamily: 'ionicons', fontSize: 18, color: tintColor }}>
							{Icon(icon)}
						</Text>
						<Text style={{ color: tintColor, fontSize: 14 }}>
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

	constructor(props) {
		super(props);
		this.state = {
			keys: [
				{
					title: 'abcd'
				},
				{
					title: 'abcd2'
				}
			]
		};
	}

	goToScan() {
		const { navigate } = this.props.navigation;
		return navigate('ScanScreen')
	}
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
					<View style={styles.gap}></View>
					<ListCell list={[
						{
							action: this.goToScan.bind(this),
							label: '手机',
							leftIcon: 'uniF15D',
							rightIcon: 'uniF14F'
						},
						{
							action: this.goToScan.bind(this),
							label: '我的订单',
							leftIcon: 'uniF156',
							rightIcon: 'uniF14F'
						},
						{
							action: this.goToScan.bind(this),
							label: '我的卡券',
							leftIcon: 'uniF150',
							rightIcon: 'uniF14F'
						}
					]} />
					<View style={styles.gap}></View>
					<ListCell list={[
						{
							action: () => {
								Linking.canOpenURL('tel:' + '18505102468').then(supported => {
									if (!supported) {
										console.log('Can\'t handle url: ' + '18505102468');
									} else {
										return Linking.openURL('tel:' + '18505102468');
									}
								}).catch(err => console.error('An error occurred', err));
							},
							label: '客服热线',
							leftIcon: 'uniF15A',
							rightIcon: 'uniF14F'
						},
						{
							action: this.goToScan.bind(this),
							label: '隐私政策',
							leftIcon: 'uniF158',
							rightIcon: 'uniF14F'
						},
						{
							action: this.goToScan.bind(this),
							label: '邀请好友',
							leftIcon: 'uniF154',
							rightIcon: 'uniF14F'
						}
					]} />
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
		height: Dimensions.get('window').width * 1 / 2,
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
		top: Dimensions.get('window').width * 1 / 4 - 34,
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
		backgroundColor: '#e8e8e8'
	},
	gap: {
		height: 10,
		backgroundColor: '#e8e8e8'
	}
});

export default VenuesInfoScreen;