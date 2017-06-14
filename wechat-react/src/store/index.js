import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import logger from 'redux-logger'
import reducer from './reducers'

let middleware = [thunk, logger];
// if (process.env.NODE_ENV !== 'production') {
    // middleware.push();
// }


const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

export default store;
