import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './RootReducer';

//Array of middlewares to be applied
const middleWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;