import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {editModule,putModule,changeModuleType} from '../thunks/modules';

const ModuleEdit = ({id,data,fileType,dispatch}) =>
	<div>
		<div>
			{id}
		</div>
                <div>
		    <button onClick={() => dispatch(putModule(id,data,fileType))}>Save</button>
                    <input
                        value={fileType}
                        onChange={event => dispatch(changeModuleType(event.target.value))}
                    />
                </div>
		<textarea
			value={data}
			onChange={event => dispatch(editModule(event.target.value))}
			cols={100}
			rows={30}
		/>
	</div>;

const mapStateToProps = ({modules:{id,data,fileType}}) => ({id,data,fileType});

export default connect(mapStateToProps)(ModuleEdit);
