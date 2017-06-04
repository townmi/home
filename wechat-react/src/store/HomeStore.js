'use strict'
import {
    observable,
    action
} from 'mobx'

class homeDataStore {
    @observable tabs;
    @action click = (Increment) => {
        this.tabs += Increment
    }
    constructor() {
        this.tabs = null;
    }
}
const homeStore = new homeDataStore()

export default homeStore