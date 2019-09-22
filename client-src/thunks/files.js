const listFiles = (dispatch) => {
	dispatch({
		type: 'LIST_FILES_REQUEST'
	});

	fetch('/api/files').then(x => x.json()).then(
		payload =>
			dispatch({
				type: 'LIST_FILES_SUCCESS',
				payload
			}),
		error =>
			dispatch({
				type: 'LIST_FILES_ERROR',
				error
			})
	);
};

const getFile = (id) => (dispatch) => {
	dispatch({
		type: 'GET_FILE_REQUEST',
		payload: {id}
	});

	fetch(`/api/files/${id}`).then(x => x.json()).then(
		payload =>
			dispatch({
				type: 'GET_FILE_SUCCESS',
				payload: Object.assign({}, payload, {id})
			}),
		error =>
			dispatch({
				type: 'GET_FILE_ERROR',
				error
			})
	);
};

const putFile = (id,data) => (dispatch) => {
	dispatch({
		type: 'PUT_FILE_REQUEST',
		payload: {id}
	});

	fetch(`/api/files/${id}`,{
		method: 'PUT',
		headers: {'Content-Type':'application/json'},
		body: JSON.stringify({data})
	}).then(
		payload =>
			dispatch({
				type: 'PUT_FILE_SUCCESS'
			}),
		error =>
			dispatch({
				type: 'PUT_FILE_ERROR'
			})
	);
};

const deleteFile = (id) => (dispatch) => {
	dispatch({
		type: 'DELETE_FILE_REQUEST',
		payload: {id}
	});

	fetch(`/api/files/${id}`,{
		method: 'DELETE'
	}).then(
		payload =>
			dispatch({
				type: 'DELETE_FILE_SUCCESS'
			}),
		error =>
			dispatch({
				type: 'DELETE_FILE_ERROR'
			})
	);
};

const editFile = (data) => (dispatch) => dispatch({
	type: 'EDIT_FILE',
	payload: {data}
});

export {listFiles,getFile,putFile,deleteFile,editFile};
