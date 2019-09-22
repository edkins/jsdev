function modules(state = {loading:false,listing:[],data:'',id:''}, action) {
	switch (action.type) {
		case 'LIST_FILES_REQUEST':
			return Object.assign({}, state, {
				loading: true
			});
		case 'LIST_FILES_SUCCESS':
			return Object.assign({}, state, {
				loading: false,
				listing: action.payload.listing
			});
		case 'LIST_FILES_ERROR':
			return Object.assign({}, state, {
				loading: false,
			});

		case 'GET_FILE_REQUEST':
			return Object.assign({}, state, {
				loading:true,
				id:action.payload.id,
			});
		case 'GET_FILE_SUCCESS':
			return Object.assign({}, state, {
				loading:false,
				data:action.payload.data,
				id:action.payload.id
			});
		case 'GET_FILE_ERROR':
			return Object.assign({}, state, {
				loading:false,
			});

                case 'DELETE_FILE_SUCCESS':
                        return Object.assign({}, state, {
                            data:''
                        });

		case 'EDIT_FILE':
			return Object.assign({}, state, {
				data:action.payload.data
			});

		default:
			return state;
	}
}

export default modules;
