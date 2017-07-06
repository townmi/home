import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	Button,
	StyleSheet,
	StatusBar,
	ScrollView
} from 'react-native';
import Header from '../../components/Header';

class IndexScreen extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: '精选',
		headerRight: <Button color={'red'} title="Press Me" onPress={this.ButtonPress} />,
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
				<Header />
				<ScrollView>
					<Text>精选</Text>
				</ScrollView>
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