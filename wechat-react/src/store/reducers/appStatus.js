import {
    APP_REQUEST_LOADING,
    APP_REQUEST_SUCCESS,
    APP_REQUEST_FAIL
} from '../actions/appStatus';

const appStatus = (state = { loading: false }, action) => {
    switch (action.type) {
        case APP_REQUEST_LOADING:
            return {
                ...state, loading: true
            }
        case APP_REQUEST_SUCCESS:
            return {
                ...state, loading: false
            }
        case APP_REQUEST_FAIL:
            return {
                ...state, loading: false
            }
        default:
            return state
    }
}

export default appStatus;

