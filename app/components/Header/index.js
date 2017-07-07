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
				<Text style={styles.title}>{title}</Text>
			</View>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		height: 42,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#28282d'

	},
	title: {
		flex: 1,
		textAlign: 'center',
		color: '#ffffff',
		fontSize: 16
	}
});

export default Header;