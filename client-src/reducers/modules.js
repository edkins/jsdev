function modules(state = {loading:false,listing:[]}, action) {
	switch (action.type) {
		case 'LIST_MODULES_REQUEST':
			return Object.assign({}, state, {
				loading: true
			});
		case 'LIST_MODULES_SUCCESS':
			return Object.assign({}, state, {
				loading: false,
				listing: action.payload.listing
			});
		case 'LIST_MODULES_ERROR':
			return Object.assign({}, state, {
				loading: false,
			});

		case 'GET_MODULE_REQUEST':
			return Object.assign({}, state, {
				loading:true,
				id:action.payload.id
			});
		case 'GET_MODULE_SUCCESS':
			return Object.assign({}, state, {
				loading:false,
				data:action.payload.data,
				id:action.payload.id
			});
		case 'GET_MODULE_ERROR':
			return Object.assign({}, state, {
				loading:false,
			});

		case 'EDIT_MODULE':
			return Object.assign({}, state, {
				data:action.payload.data
			});

                case 'NEW_MODULE':
                    return Object.assign({}, state, {
                        id: action.payload.id,
                        data: ''
                    });

		default:
			return state;
	}
}

export default modules;
