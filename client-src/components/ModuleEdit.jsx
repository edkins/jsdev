import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {editModule} from '../thunks/modules';

const ModuleEdit = ({id,data,dispatch}) =>
	<div>
		<div>
			{id}
		</div>
		<textarea
			value={data}
			onChange={event => {console.log(event.target.value); dispatch(editModule(event.target.value))}}
			cols={100}
			rows={30}
		/>
	</div>;

const mapStateToProps = ({modules:{id,data}}) => ({id,data});

export default connect(mapStateToProps)(ModuleEdit);
