export const APP_REQUEST_LOADING = "APP_REQUEST_LOADING";
export const APP_REQUEST_SUCCESS = "APP_REQUEST_SUCCESS";
export const APP_REQUEST_FAIL = "APP_REQUEST_FAIL";

export const loading = state => ({
    type: APP_REQUEST_LOADING,
    state
});

export const loadSuccess = state => ({
    type: APP_REQUEST_SUCCESS,
    state
});

export const loadFail = state => ({
    type: APP_REQUEST_FAIL,
    state
});