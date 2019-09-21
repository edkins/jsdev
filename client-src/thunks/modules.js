const listModules = (dispatch) => {
	dispatch({
		type: 'LIST_MODULES_REQUEST'
	});

	fetch('/api/modules').then(x => x.json()).then(
		payload =>
			dispatch({
				type: 'LIST_MODULES_SUCCESS',
				payload
			}),
		error =>
			dispatch({
				type: 'LIST_MODULES_ERROR',
				error
			})
	);
};

export {listModules};
