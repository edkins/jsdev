import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {editModule,putModule} from '../thunks/modules';

const ModuleEdit = ({id,data,dispatch}) =>
	<div>
		<div>
			{id}
		</div>
		<textarea
			value={data}
			onChange={event => dispatch(editModule(event.target.value))}
			cols={100}
			rows={30}
		/>
		<button onClick={() => dispatch(putModule(id,data))}>Save</button>
	</div>;

const mapStateToProps = ({modules:{id,data}}) => ({id,data});

export default connect(mapStateToProps)(ModuleEdit);
