import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

function reducer(state = {layers:{loading:false,listing:[]}}, action) {
	switch (action.type) {
		case 'LIST_LAYERS_REQUEST':
			return {layers:{loading:true,listing:state.layers.listing}};
		case 'LIST_LAYERS_SUCCESS':
			return {layers:{loading:false,listing:action.payload.listing}};
		case 'LIST_LAYERS_ERROR':
			return {layers:{loading:false,listing:state.layers.listing}};
		default:
			console.log(state);
			return state;
	}
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
