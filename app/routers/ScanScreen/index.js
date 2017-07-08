import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	Platform,
	Vibration,
	TouchableOpacity,
	Animated,
	Easing,
	Dimensions,
	StatusBar
} from 'react-native';

const { width, height } = Dimensions.get('window');

import Camera from 'react-native-camera';

import Icon from "../../assets/icons/icons";
import ViewFinder from './ViewFinder';

import scanLine from './images/scan_line.png';//扫描线

class ScanScreen extends Component {
	constructor(props) {
		super(props);
		this.camera = null;
		this.state = {
			transCode: '',//条码
			openFlash: false,
			active: true,
			flag: true,
			animatedHeight: new Animated.Value(0), // 初始值
			isEndAnimation: false,//结束动画标记
		}
		this._goBack = this._goBack.bind(this);
		this._startAnimation = this._startAnimation.bind(this);
		this.barcodeReceived = this.barcodeReceived.bind(this);
		// this._search = this._search.bind(this);
		this._changeFlash = this._changeFlash.bind(this);
		this.changeState = this.changeState.bind(this);
	}
	componentDidMount() {
		this._startAnimation(false);
	}
	//开始动画，循环播放
	_startAnimation(isEnd) {
		Animated.timing(this.state.animatedHeight, {
			toValue: 1,
			duration: 1500,
			easing: Easing.quad
		}).start(
			() => {
				if (isEnd) {
					this.setState({
						isEndAnimation: true
					})
					return;
				}
				if (!this.state.isEndAnimation) {
					this.state.animatedHeight.setValue(0);
					this._startAnimation(false)
				}
			}
			);
		console.log("开始动画");
	}
	barcodeReceived(e) {
		if (e.data !== this.transCode) {
			Vibration.vibrate([0, 500, 200, 500]);
			this.transCode = e.data; // 放在this上，防止触发多次，setstate有延时
			if (this.state.flag) {
				this.changeState(false);
				//通过条码编号获取数据
				alert("transCode=" + this.transCode);
			}
			console.log("transCode=" + this.transCode);
		}
	}
	//返回按钮点击事件
	_goBack() {
		this.setState({
			isEndAnimation: true,
		});
		const { goBack } = this.props.navigation;
		return goBack();
	}
	//开灯关灯
	_changeFlash() {
		this.setState({
			openFlash: !this.state.openFlash,
		});
	}
	//改变请求状态
	changeState(status) {
		this.setState({
			flag: status
		});
		console.log('status=' + status);
	}

	render() {
		const {
                openFlash,
			active,
            } = this.state;
		return (
			<View style={styles.allContainer}>
				<StatusBar
					animated={true}
					hidden={true}
				/>
				{(() => {
					if (active) {
						return (
							<Camera
								ref={cam => this.camera = cam}
								style={styles.cameraStyle}
								barcodeScannerEnabled={true}
								onBarCodeRead={
									this.barcodeReceived
								}
								torchMode={openFlash ? 'on' : 'off'}>
								<View style={styles.container}>
									<View style={styles.titleContainer}>
										<View style={styles.leftContainer}>
											<TouchableOpacity activeOpacity={1} onPress={this._goBack}>
												<Text style={{ fontFamily: 'ionicons', fontSize: 20, color: '#ffffff' }}>
													{Icon('uniF155')}
												</Text>
											</TouchableOpacity>
										</View>
									</View>
								</View>
								<View style={styles.centerContainer} />
								<View style={{ flexDirection: 'row' }}>
									<View style={styles.fillView} />
									<View style={styles.scan}>
										<ViewFinder />
										<Animated.Image source={scanLine} style={[styles.scanLine, {
											opacity: 1,
											height: this.state.animatedHeight.interpolate({
												inputRange: [0, 1],
												outputRange: [0, 196]
											})
										}]}>
										</Animated.Image>
									</View>
									<View style={styles.fillView} />
								</View>
								<View style={styles.bottomContainer}>
									<Text style={styles.text} numberOfLines={2} >将二维码放入框内即可自动扫描</Text>
									<TouchableOpacity onPress={this._changeFlash}>
										<View style={styles.flash}>
											<Text style={{ fontFamily: 'ionicons', fontSize: 20, color: '#ffffff' }}>
												{Icon('uniF14C')}
											</Text>
											<Text style={styles.text}> 开灯/关灯 </Text>
										</View>
									</TouchableOpacity>
								</View>
							</Camera>
						);
					}
				})()}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	allContainer: {
		flex: 1,
	},
	container: {
		...Platform.select({
			ios: {
				height: 64,
			},
			android: {
				height: 50
			}
		}),
		backgroundColor: '#000000',
		opacity: 0.5
	},
	titleContainer: {
		flex: 1,
		...Platform.select({
			ios: {
				paddingTop: 15,
			},
			android: {
				paddingTop: 0,
			}
		}),
		flexDirection: 'row',
	},
	leftContainer: {
		flex: 0,
		justifyContent: 'center',
	},
	backImg: {
		marginLeft: 10,
	},
	cameraStyle: {
		alignSelf: 'center',
		width: width,
		height: height,
	},
	flash: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: 60,
	},
	flashIcon: {
		fontSize: 1,
		color: '#ffffff',
	},
	text: {
		fontSize: 14,
		color: '#ffffff',
		marginTop: 5
	},
	scanLine: {
		width: 194,
		position: 'absolute',
		top: 3,
		alignSelf: 'center',
	},
	centerContainer: {
		...Platform.select({
			ios: {
				height: 80,
			},
			android: {
				height: 60,
			}
		}),
		width: width,
		backgroundColor: '#000000',
		opacity: 0.5
	},
	bottomContainer: {
		alignItems: 'center',
		backgroundColor: '#000000',
		alignSelf: 'center',
		opacity: 0.5,
		flex: 1,
		paddingTop: 10,
		width: width
	},
	fillView: {
		width: (width - 200) / 2,
		height: 200,
		backgroundColor: '#000000',
		opacity: 0.5
	},
	scan: {
		width: 200,
		height: 200,
		position: 'relative',
		alignSelf: 'center'
	}
})

export default ScanScreen;