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

import Carousel from '../../components/Carousel';
import Header from '../../components/Header';
import Icon from '../../assets/icons/icons';
import ViewCell from '../../components/ViewCell';

class IndexScreen extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		tabBarLabel: ({ tintColor }) => {
			const icon = tintColor === 'rgba(255, 255, 255, 1)' ? 'uniF13C' : 'uniF145';
			if (Platform.OS === 'ios') {
				return '精选';
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
			banners: [],
			sections: [
				{
					label: '玩乐',
					icon: 'uniF15F',
					action: () => {
						alert(1);
					}
				},
				{
					label: '音乐',
					icon: 'uniF161',
					action: () => {
						alert(1);
					}
				},
				{
					label: '酒饮',
					icon: 'uniF15E',
					action: () => {
						alert(1);
					}
				},
				{
					label: '派对',
					icon: 'uniF162',
					action: () => {
						alert(1);
					}
				},
				{
					label: '潮流',
					icon: 'uniF160',
					action: () => {
						alert(1);
					}
				}
			]
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
		const { banners, sections } = this.state;
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
						<View style={styles.sections}>
							{
								sections.map((cell, index) => {
									let sectionIcon = {
										height: 20,
										lineHeight: 16,
										fontFamily: 'ionicons',
										color: '#ffffff',
										fontSize: 18,
										textAlign: 'center'
									}
									if(index === (sections.length - 1)) {
										Object.assign(sectionIcon, {fontSize: 12})
									}
									
									return (
										<TouchableHighlight onPress={cell.action} style={styles.section} underlayColor='#1c2437' key={index}>
											<View>
												<Text style={sectionIcon}>{Icon(cell.icon)}</Text>
												<Text style={styles.sectionTxt}>{cell.label}</Text>
											</View>
										</TouchableHighlight>
									)
								})
							}
						</View>
						<ViewCell/>
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