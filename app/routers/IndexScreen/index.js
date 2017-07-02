import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	Button,
	StyleSheet,
	StatusBar
} from 'react-native';

class IndexScreen extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: '精选',
		headerRight: <Button color={'red'} title="Press Me" onPress={this.ButtonPress}/>,
	});
	ButtonPress() {
		this.props.navigation.navigate.goBack();
	}
	render() {
		return (
			<View>
				<StatusBar
					hidden={false}
				/>
				<Text>精选</Text>
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

export default IndexScreen;