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

const putModule = (id,data,fileType) => (dispatch) => {
	dispatch({
		type: 'PUT_MODULE_REQUEST',
		payload: {id}
	});

	fetch(`/api/modules/${id}`,{
		method: 'PUT',
		headers: {'Content-Type':'application/json'},
		body: JSON.stringify({data,fileType})
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

const newModule = (id) => (dispatch) => dispatch({
    type: 'NEW_MODULE',
    payload: {id}
});

const editModule = (data) => (dispatch) => dispatch({
	type: 'EDIT_MODULE',
	payload: {data}
});

const changeModuleType = (fileType) => (dispatch) => dispatch({
	type: 'CHANGE_MODULE_TYPE',
	payload: {fileType}
});

export {listModules,getModule,putModule,editModule,changeModuleType,newModule};
