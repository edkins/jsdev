const listTypes = (dispatch) => {
	dispatch({
		type: 'LIST_TYPES_REQUEST'
	});

	fetch('/api/types').then(x => x.json()).then(
		payload =>
			dispatch({
				type: 'LIST_TYPES_SUCCESS',
				payload
			}),
		error =>
			dispatch({
				type: 'LIST_TYPES_ERROR',
				error
			})
	);
};

const addType = (id) => (dispatch) => dispatch({type: 'ADD_TYPE', payload:{id}});

const editTypeId = (id) => (dispatch) => dispatch({type: 'EDIT_TYPE_ID', payload:{id}});

export {listTypes,addType,editTypeId};
