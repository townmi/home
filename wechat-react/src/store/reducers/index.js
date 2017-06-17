import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import appStatus from './appStatus';

export default combineReducers({
    appStatus
});