import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	Button,
	StyleSheet,
	StatusBar,
	ScrollView,
	Dimensions
} from 'react-native';
import Carousel from '../../components/Carousel'
import Header from '../../components/Header';
import Icon from "../../assets/icons/icons";

class IndexScreen extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		tabBarLabel: '精选',
		title: '精选',
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
		fetch('https://raw.githubusercontent.com/ab-inbev/APAC_Yedian_H5_React/master/mockData/banner.json?token=AGY_lcpMvfonOPyiNufNF_tk9hM6ZYFJks5ZaYfmwA%3D%3D', init)
			.then((response) => response.json())
			.then((responseJson) => {
				self.setState({
					banners: responseJson.data
				});
			})
			.catch(e => { console.log(`error ${e}`) });
	}
	goToScan() {
		const { navigate } = this.props.navigation;
		return navigate('ScanScreen')
	}
	render() {
		const { banners } = this.state;
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
				<ScrollView style={styles.container}>
					<Carousel style={styles.carouselBox} banners={banners} />
					<Button title='扫码核销' onPress={this.goToScan.bind(this)}/>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	box: {
	},
	container: {
		height: Dimensions.get('window').height - 45,
		backgroundColor: '#ffffff',
		flexDirection: 'column'
	},
	item: {
		height: Dimensions.get('window').width * 5 / 8,
		flex: 1
	}
});

export default IndexScreen;