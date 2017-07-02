import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	StatusBar
} from 'react-native';

class UserScreen extends Component {
	static navigationOptions = {
		title: '我的',
		drawerLabel: '我的',
		drawerIcon: ({ tintColor }) => (
			<Image
				source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }}
				style={[styles.icon, { tintColor: tintColor }]}
			/>
		),
	};
	render() {
		return (
			<View>
				<StatusBar
					hidden={false}
				/>
				<Text>我的</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		width: 24,
		height: 24,
	},
});

export default UserScreen;