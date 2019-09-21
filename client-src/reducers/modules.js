function types(state = {loading:false,listing:[]}, action) {
	switch (action.type) {
		case 'LIST_MODULES_REQUEST':
			return {loading:true,listing:state.listing};
		case 'LIST_MODULES_SUCCESS':
			return {loading:false,listing:action.payload.listing};
		case 'LIST_MODULES_ERROR':
			return {loading:false,listing:state.listing};

		default:
			return state;
	}
}

export default types;
