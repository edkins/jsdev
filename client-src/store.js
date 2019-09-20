import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import layers from './reducers/layers';
import types from './reducers/types';

const reducer = combineReducers({layers,types});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
