function layers(state = {loading:false,listing:[]}, action) {
	switch (action.type) {
		case 'LIST_LAYERS_REQUEST':
			return {loading:true,listing:state.listing};
		case 'LIST_LAYERS_SUCCESS':
			return {loading:false,listing:action.payload.listing};
		case 'LIST_LAYERS_ERROR':
			return {loading:false,listing:state.listing};

		default:
			return state;
	}
}

export default layers;
