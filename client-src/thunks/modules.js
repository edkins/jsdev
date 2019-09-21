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

const getModule = (id) => (dispatch) => {
	dispatch({
		type: 'GET_MODULE_REQUEST',
		payload: {id}
	});

	fetch(`/api/modules/${id}`).then(x => x.json()).then(
		payload =>
			dispatch({
				type: 'GET_MODULE_SUCCESS',
				payload: Object.assign({}, payload, {id})
			}),
		error =>
			dispatch({
				type: 'GET_MODULE_ERROR',
				error
			})
	);
};

const putModule = (id,data) => (dispatch) => {
	dispatch({
		type: 'PUT_MODULE_REQUEST',
		payload: {id}
	});

	fetch(`/api/modules/${id}`,{
		method: 'PUT',
		headers: {'Content-Type':'application/json'},
		body: JSON.stringify({data})
	}).then(
		payload =>
			dispatch({
				type: 'PUT_MODULE_SUCCESS'
			}),
		error =>
			dispatch({
				type: 'PUT_MODULE_ERROR'
			})
	);
};

const editModule = (data) => (dispatch) => dispatch({
	type: 'EDIT_MODULE',
	payload: {data}
});

export {listModules,getModule,putModule,editModule};
