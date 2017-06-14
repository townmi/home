import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import logger from 'redux-logger'
import reducers from './reducers'

let middleware = [thunk, logger];
// if (process.env.NODE_ENV !== 'production') {
    // middleware.push();
// }


const init = (extend) => {
    extend && middleware.concat(extend);
    return createStore(
        reducers,
        applyMiddleware(...middleware)
    );
};

export default init;
