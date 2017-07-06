import React, { Component } from 'react';
import {
	View,
	Text,
	Dimensions,
	StatusBar,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

class Header extends Component {
	constructor(props) {
		super(props)
	}
	left() {
	}
	right() {
	}
	render() {
		const { title } = this.props;
		return (
			<View style={styles.container}>
				<TouchableHighlight
					onPress={this.left}
					title="left"
					style={styles.left}
					accessibilityLabel="This sounds great!">
					<Text>L</Text>
				</TouchableHighlight>
				<Text style={styles.title}>{title}</Text>
				<TouchableHighlight
					onPress={this.right}
					title="right"
					style={styles.right}
					accessibilityLabel="This sounds great!">
					<Text>R</Text>
				</TouchableHighlight>
			</View>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		height: 40,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red'

	},
	left: {
		flex: 1,
		backgroundColor: 'red'
	},
	title: {
		flex: 8,
		textAlign: 'center'
	},
	right: {
		flex: 1,
		backgroundColor: 'transparent'
	}
});

export default Header;