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
import Header from '../../components/Header';
import Icon from "../../assets/icons/icons";

class CommunityScreen extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		tabBarLabel: '社区',
		title: '社区',
		tabBarIcon: ({ tintColor }) => {
			const icon = tintColor === 'rgba(255, 255, 255, 1)' ? 'uniF138' : 'uniF13B';
			return (
				<Text style={{ fontFamily: 'ionicons', fontSize: 20, color: tintColor }}>
					{Icon(icon)}
				</Text>
			)
		},
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
				<Header style={styles.header} title='社区' />
				<View style={styles.container}>
					<ScrollView>
						<Text>精选</Text>
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

export default CommunityScreen;