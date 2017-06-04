'use strict'
import { browserHistory } from 'react-router';
import {
	observable,
	action,
	computed
} from 'mobx'

import { getUserInfo } from "../libs/api";

class authDataStore {
	@observable account;
	@observable login;
	@observable logining;
	@action auth = (success, fail) => {
		getUserInfo().then(res => {
			this.account = res.data;
			this.login = true;
			this.logining = false;
			success && success();
		}, error => {
			this.login = false;
			this.account = null;
			this.logining = false;
			fail && fail();
		});
	}
	@action refresh = () => {
		alert(2);
		this.account = null;
	}
	constructor() {
		// this.account = null;
		// this.login = false;
		// this.logining = true;
		getUserInfo().then(res => {
			this.account = res.data;
			this.login = true;
			this.logining = false;
			// success && success();
		}, error => {
			this.login = false;
			this.account = null;
			this.logining = false;
			console.log(error)
			// error && error();
		});
	}
}
const authData = new authDataStore()

export default authData