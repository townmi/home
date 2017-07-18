import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableHighlight,
	Button,
	StyleSheet,
	StatusBar,
	ScrollView,
	Dimensions,
	Platform
} from 'react-native';
import Header from '../../components/Header';
import Icon from '../../assets/icons/icons';
import OrderCardCell from '../../components/OrderCardCell';

class IndexScreen extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		tabBarLabel: ({ tintColor }) => {
			const icon = tintColor === 'rgba(255, 255, 255, 1)' ? 'uniF13C' : 'uniF145';
			if (Platform.OS === 'ios') {
				return '最新订单';
			} else {
				return (
					<View style={{ alignItems: 'center' }}>
						<Text style={{ fontFamily: 'ionicons', fontSize: 18, color: tintColor }}>
							{Icon(icon)}
						</Text>
						<Text style={{ color: tintColor, fontSize: 14 }}>
							精选
					</Text>
					</View>
				)
			}
		},
		tabBarIcon: ({ tintColor }) => {
			const icon = tintColor === 'rgba(255, 255, 255, 1)' ? 'uniF13C' : 'uniF145';
			return (
				<Text style={{ fontFamily: 'ionicons', fontSize: 20, color: tintColor }}>
					{Icon(icon)}
				</Text>
			)
		},
	});
	constructor(props) {
		super(props)
		this.state = {
			banners: []
		}
	}

	componentWillMount() {
		this.fetchBanner();
	}

	fetchBanner() {
		const self = this;
		const init = {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		};
		fetch('https://raw.githubusercontent.com/ab-inbev/APAC_Yedian_H5_React/Staging/mockData/banner.json?token=AGY_lXGzY78Gtc81OLPsV27dA_KeuIu1ks5ZczOqwA%3D%3D', init)
			.then((response) => response.json())
			.then((responseJson) => {
				self.setState({
					banners: responseJson.data
				});
			})
			.catch(e => { console.log(`error ${e}`) });
	}
	
	render() {
		// const { } = this.state;
		return (
			<View style={styles.box}>
				<StatusBar
					animated={true}
					hidden={false}
					backgroundColor={'#19191d'}
					translucent={true}
					barStyle={'light-content'}
					showHideTransition={'fade'}
				/>
				<Header title='最新订单'/>
				<ScrollView style={styles.container}>
						<OrderCardCell />
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	box: {
		paddingTop: 20,
		backgroundColor: '#19191d'
	},
	container: {
		paddingTop: 10,
		height: Dimensions.get('window').height - 45,
		backgroundColor: '#ffffff',
		flexDirection: 'column'
	},
	carouselBox: {
		height: Dimensions.get('window').width * 5 / 8,
		overflow: 'hidden',
	},
	sections: {
		paddingTop: 12,
		paddingBottom: 12,
		flexDirection: 'row',
		backgroundColor: '#1c2437'
	},
	section: {
		flex: 1,
		alignItems: 'center'
	},
	sectionTxt: {
		marginTop: 5,
		color: '#ffffff',
		fontSize: 14,
		textAlign: 'center'
	}
});

export default IndexScreen;