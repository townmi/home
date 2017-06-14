'use strict'
import {
    observable,
    action
} from 'mobx'

class AppStatusStore {
    @observable loading;
    @action request = () => {
        this.loading = true;
    }
    @action done = () => {
        this.loading = false;
    }
    constructor() {
        this.loading = false;
    }
}
const AppStatus = new AppStatusStore()

export default AppStatus;