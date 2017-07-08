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

class Search extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		tabBarLabel: '预订',
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

export default Search;