import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import layers from './reducers/layers';
import types from './reducers/types';
import modules from './reducers/modules';
import files from './reducers/files';
import panel from './reducers/panel';

const reducer = combineReducers({layers,types,modules,files,panel});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
