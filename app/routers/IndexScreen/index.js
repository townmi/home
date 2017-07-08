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
				})
				alert(JSON.stringify(responseJson.data));
			})
			.catch(e => { console.log(`error ${e}`) });
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
					<View>
						<Image style={styles.item} source={{ uri: 'https://raw.githubusercontent.com/ab-inbev/APAC_Yedian_Wechat/master/src/img/activity/0518.jpg?token=AGY_lZzDWsgr2ZIweyEWwl8qjtcQsvTyks5ZaY8SwA%3D%3D' }} />
					</View>
					<Text>精选</Text>
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
		backgroundColor: '#cccccc',
		flexDirection: 'column'
	},
	item: {
		flex: 1
	}
});

export default IndexScreen;