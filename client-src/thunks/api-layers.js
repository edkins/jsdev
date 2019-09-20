const listLayers = (dispatch) => {
	dispatch({
		type: 'LIST_LAYERS_REQUEST'
	});

	fetch('/api/layers').then(x => x.json()).then(
		payload =>
			dispatch({
				type: 'LIST_LAYERS_SUCCESS',
				payload
			}),
		error =>
			dispatch({
				type: 'LIST_LAYERS_ERROR',
				error
			})
	);
};

export {listLayers};
