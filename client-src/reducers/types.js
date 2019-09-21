function types(state = {loading:false,listing:[],id:''}, action) {
	switch (action.type) {
		case 'LIST_TYPES_REQUEST':
			return {loading:true,listing:state.listing, id:state.id};
		case 'LIST_TYPES_SUCCESS':
			return {loading:false,listing:action.payload.listing, id:state.id};
		case 'LIST_TYPES_ERROR':
			return {loading:false,listing:state.listing, id:state.id};

                case 'ADD_TYPE':
                    return {loading:false, id:state.id, listing: state.listing.concat([{id:action.payload.id}])};
                case 'EDIT_TYPE_ID':
                    return {loading:false, listing: state.listing, id:action.payload.id};

		default:
			return state;
	}
}

export default types;
