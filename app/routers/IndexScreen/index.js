import React, { Component } from 'react';
import {
	View,
	Text,
	StatusBar
} from 'react-native';

class IndexScreen extends Component {
	static navigationOptions = {
		title: '精选',
	};
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

export default IndexScreen;