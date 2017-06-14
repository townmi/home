import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import appStatus from './appStatus';

export default combineReducers({
    appStatus,
    routing
});