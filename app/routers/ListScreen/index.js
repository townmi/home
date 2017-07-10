import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	Button,
	StyleSheet,
	StatusBar,
	ScrollView,
	Dimensions,
	Platform
} from 'react-native';
import Header from '../../components/Header';
import Icon from "../../assets/icons/icons";

class ListScreen extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		tabBarLabel: ({ tintColor }) => {
			const icon = tintColor === 'rgba(255, 255, 255, 1)' ? 'uniF146': 'uniF14C';
			if (Platform.OS === 'ios') {
				return '预订';
			} else {
				return (
					<View style={{ alignItems: 'center' }}>
						<Text style={{ fontFamily: 'ionicons', fontSize: 22, color: tintColor }}>
							{Icon(icon)}
						</Text>
						<Text style={{ color: tintColor, fontSize: 16 }}>
							预订
					</Text>
					</View>
				)
			}
		},
		tabBarIcon: ({ tintColor }) => {
			const icon = tintColor === 'rgba(255, 255, 255, 1)' ? 'uniF146': 'uniF14C';
			return (
				<Text style={{ fontFamily: 'ionicons', fontSize: 20, color: tintColor }}>
					{Icon(icon)}
				</Text>
			)
		}
	});
	ButtonPress() {
		this.props.navigation.navigate.goBack();
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
				<Header title='预订'/>
				<View style={styles.container}>
					<ScrollView>
						<View style={styles.view}>
							<Text>精选</Text>
						</View>
					</ScrollView>
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
	container: {
		height: Dimensions.get('window').height-112,
		backgroundColor: '#ffffff'
	}
});

export default ListScreen;