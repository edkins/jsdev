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

export {listTypes};
